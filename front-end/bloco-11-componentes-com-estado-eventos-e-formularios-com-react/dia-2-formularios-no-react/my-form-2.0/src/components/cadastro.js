import React from 'react';
import Select from './Select'

class Cadastro extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      cpf:'',
      endereco: '',
      estado: '',
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    // const value = event.target.type === checkbox ? event.target.checked : event.target.value;
    this.setState({
      [event.target.name]: event.target.value,
    });
  }  
        
  render() {
    const { name, email, cpf, endereco, cidade, estado } = this.state;
    return(
      <fieldset>
        <label htmlFor="input-name">
          Nome
          <input type="text" name="name"value={name} id="input-name" onChange={ this.handleChange }>
          </input>
        </label>
        <label htmlFor="input-email">
          Email
          <input type="text" name="email" value={email} id="input-email" onChange={ this.handleChange }>
          </input>
        </label>
        <label htmlFor="input-cpf">
          CPF
          <input type="text" name="cpf" value={cpf} id="input-cpf" onChange={ this.handleChange }>
          </input>
        </label>
        <label htmlFor="input-endereco">
          Endereço
          <input type="text" name="endereco" value={endereco} id="input-endereco" onChange={ this.handleChange }>
          </input>
        </label>
        <label htmlFor="input-cidade">
          Cidade
          <input type="text" name="cidade" value={cidade} id="input-cidade" onChange={ this.handleChange }>
          </input>
        </label>

        <Select value={estado} onChange={ this.handleChange }/>

      </fieldset>
    );
  }
}

export default Cadastro;
