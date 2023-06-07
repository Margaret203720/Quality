class TodoList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        todos: [
          { id: 1, text: "Купить молоко" },
          { id: 2, text: "Посмотреть видеолекцию" },
          { id: 3, text: "Сделать лабы по web-программированию" },
          { id: 4, text: "Развесить белье" },
          { id: 5, text: "Приготовить ужин" },
          { id: 6, text: "Сделать лабы по java" }
        ]
      };
    }

    
  
    render() {
      return (
        <ul style={{ listStyleType: "square", color: "blue", fontSize: 40 }}>
        {this.state.todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
        </ul>
      );
    }
  }
  
  ReactDOM.render(<TodoList />, document.getElementById("app"));
  