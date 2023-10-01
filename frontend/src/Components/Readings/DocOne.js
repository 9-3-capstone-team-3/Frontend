function DocOne() {
    return (
        <div className="document">
            <iframe 
                src="https://docs.google.com/document/d/e/2PACX-1vTPBdxlbEYa2bYT39OKpsgAm1oPC9O60q1LHiUbteAA3r0PuZnvuwDYLDLE4b7JZbafczbjpyKY9ZzW/pub?embedded=true" 
                width="350" 
                height="250"
                //frameBorder="0"
                allowFullScreen
                title="Embedded Google Doc">
            </iframe>
        </div>
    );
}

export default DocOne;