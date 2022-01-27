export class DisplayManager {

    public static readonly WebGL2:string = "webgl2";
    
    /**
     * Retrieves the webGl Context
     */
    public static createDisplay(queryId:string): WebGL2RenderingContext | undefined {
        const canvas = <HTMLCanvasElement> document.getElementById(queryId);
        // Initialisierung des GL Kontexts
        const gl = <WebGL2RenderingContext> canvas.getContext(DisplayManager.WebGL2);

        // Nur fortfahren, wenn WebGL verfügbar ist und funktioniert
        if (!gl) {
            return undefined;
        }

        // Setze clear color auf schwarz, vollständig sichtbar
        gl.clearColor(1.0, 0.0, 0.0, 1.0);
        // Lösche den color buffer mit definierter clear color
        gl.clear(gl.COLOR_BUFFER_BIT);
        return gl;
    }

}