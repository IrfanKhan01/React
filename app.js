

// what render
// where render

// class Example extends React.Component{
//     touch(arg) {
//         console.log(arg);
//     }

//     render() {
//         return React.createElement('button',
//           {onClick: this.touch.bind(this, 'Hello')},
//           'Click'
//         )
//     }
// }

//     // var h1 = React.createElement("i",null, "Hello")
//     ReactDOM.render(
//       React.createElement(Example, {name: 'Irfan Khan', number: 12345}),
//       document.getElementById('root')
//     )



// let input = React.createElement('input', { type: 'text',id: 'txt' ,placeholder: 'Type Something' });
// let btn = React.createElement('button', { onClick: this.touch.bind(this) }, 'Click');
// let btn = React.createElement('button', { onClick: this.txt()}, 'Click');



let txt = () => {
    console.log(input.value)
}

class Ex extends React.Component {
    touch() {
        console.log(this.refs.x.value)               
       
        
        this.refs.x.value = '';
        this.refs.x.focus();
    }

    // click1() {
    // console.log(this.refs.x);

    // }

    render() {

        let input = React.createElement('input', { type: 'text', ref: 'x', id: 'txt',className: 'form-control', placeholder: 'Type Something' });
        let btn = React.createElement('button', {onClick: this.touch.bind(this), className: 'btn btn-success' }, 'Click');

        let span = React.createElement('span', {className: 'input-group-btn'}, btn)
        return React.createElement('div',{className: 'input-group'}, input, span);
    }
}

ReactDOM.render(
    React.createElement(Ex),
    document.getElementById('root')
)