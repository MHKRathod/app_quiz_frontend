import "./QNA.css";

export const QuestionAndOptions = () => {
    return(
        <main className="d-flex justify-center qns-main">
        <section className="question-dialog container-flex">
            <h2 className="d-flex justify-center qns-title">
                marvel
            </h2>
            <div className="qsn_scr">
                <span>Question: 1/4</span>
                <span className="score">Score: 0</span>
            </div>
            <div className="question">
                <span>Q1 :abcdrfgh</span>
            </div>
            <div className="options-box">
                
                <button className="button option d-flex justify-center">a</button>
                <button className="button option d-flex justify-center">b</button>
                <button className="button option d-flex justify-center">c</button>
                <button className="button option d-flex justify-center">d</button>
            </div>
            <div className="nxt-btn-container">
                <div className="d-flex gap">
                    <button className="play-btn button btn-secondary cursor">Quit</button>
                    <button className="nxt-qstn play-now-btn button btn-primary cursor">Next Question</button>
                </div>
            </div>
        </section>
    </main>
    )
}