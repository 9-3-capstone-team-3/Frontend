

export default function Terminal(){
    return (
        <>
    <div className="fakeMenu">
        <div className="fakeButtons fakeClose"></div>
        <div className="fakeButtons fakeMinimize"></div>
        <div className="fakeButtons fakeZoom"></div>
    </div>
    <div className="fakeScreen">
        <p className="line1">$ yo gulp-webapp<span className="cursor1">_</span></p>
        <p className="line2">Out of the box I include HTML5 Boilerplate, jQuery, and a gulpfile.js to build your app.<span className="cursor2">_</span></p>
        <p className="line3">[?] What more would you like? (Press space to select)<span className="cursor3">_</span></p>
        <p className="line4">><span className="cursor4">_</span></p>
    </div>
    </>
    )
}