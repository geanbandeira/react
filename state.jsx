//representa o estado interno do componente, pode ser modificado em resposta de eventos

class Couter extends React.Componente{
  constructor (props){
    super(props);
    this.state {count : 0 };
  }

  incremente = () => {
    this.setState({count this.state.count + 1});
};

  render(){
    return(
    <div>
      <p>Count {this.state.count}</p>
      <button onCLick={this.increment}>Incrementar</>
    </div>
      );
  }
}
  
