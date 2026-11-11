import fs from "node:fs";
import path from "node:path";
import ts from "typescript";

export function loadTypeScriptModule(relativePath) {
  const filePath = path.resolve(process.cwd(), relativePath);
  const source = fs.readFileSync(filePath, "utf8");
  const { outputText, diagnostics } = ts.transpileModule(source, {
    fileName: filePath,
    reportDiagnostics: true,
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
    },
  });

  const errors = diagnostics?.filter(
    (diagnostic) => diagnostic.category === ts.DiagnosticCategory.Error,
  );

  if (errors && errors.length > 0) {
    throw new Error(
      errors
        .map((diagnostic) =>
          ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n"),
        )
        .join("\n"),
    );
  }

  const loadedModule = { exports: {} };
  const evaluate = new Function("module", "exports", "require", outputText);
  evaluate(loadedModule, loadedModule.exports, (specifier) => {
    throw new Error(`测试模块不支持运行时依赖：${specifier}`);
  });

  return loadedModule.exports;
}
