const App = () => (
    <div>
        <Tweet username="MyUsername" name="My Name" date="1/2/23" text="This is my first tweet" />
        <Tweet username="YourUsername" name="Your Name" date="2/1/23" text="This is my first tweet too!" />
        <Tweet username="AnotherUsername" name="Another Name" date="3/4/23" text="This is another tweet" />
    </div>
)
  
  
  
ReactDOM.render(<App />, document.getElementById("root"))