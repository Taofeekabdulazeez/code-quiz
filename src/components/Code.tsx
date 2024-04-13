import typescriptHighlight from "@cloudscape-design/code-view/highlight/typescript";
import CodeView from "@cloudscape-design/code-view/code-view";

function Code() {
  return (
    <CodeView
      content='#include <stdio.h>
      int main(){
        int x, y = 3, z = 2;
        x = y / 2 * z;
        printf("%d", x);

        return 0;
      }'
      lineNumbers={true}
      highlight={typescriptHighlight}
    />
  );
}

export default Code;
