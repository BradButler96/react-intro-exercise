const App = () => (
    <div>
        <Person name="Ash" age="21" hobbies={["skiing", "mountain biking", "rock climbing"]} />
        <Person name="Fredrick" age="18" hobbies={["dirt biking", "hiking", "snowboarding", "basketball"]} />
        <Person name="Jeff" age="11" hobbies={["video games", "soccer"]} />
    </div>
)
  
  
  
ReactDOM.render(<App />, document.getElementById("root"))