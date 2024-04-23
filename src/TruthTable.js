/*
import React from 'react';
import './TruthTable.css'; // Import the CSS file

class TruthTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [],
    };
  }

  generateTruthTable() {
    const rows = [];
    for (let A = 0; A <= 1; A++) {
      for (let B = 0; B <= 1; B++) {
        const result = A & B;
        rows.push({ A, B, result });
      }
    }
    this.setState({ rows });
  }

  componentDidMount() {
    this.generateTruthTable();
  }

  render() {
    return (
      <div className="truth-table-container"> 
        <h2>Truth Table for A & B</h2>
        <table className="truth-table"> 
          <thead>
            <tr>
              <th>A</th>
              <th>B</th>
              <th>A & B</th>
            </tr>
          </thead>
          <tbody>
            {this.state.rows.map((row, index) => (
              <tr key={index}>
                <td>{row.A}</td>
                <td>{row.B}</td>
                <td>{row.result}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TruthTable;
*/



// Working with 0's and 1's without implicaton
/*
import React from 'react';
import './TruthTable.css';

class TruthTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      predicate: '',
      rows: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.generateTruthTable = this.generateTruthTable.bind(this);
  }

  handleChange(event) {
    this.setState({ predicate: event.target.value });
  }

  generateTruthTable() {
    const { predicate } = this.state;
    const rows = [];
    
    // Generate all possible combinations of true/false for variables in the predicate
    const variables = predicate.split(/[&|!>|^=]/).filter(Boolean);
    const numVariables = new Set(variables).size;
    const numCombinations = Math.pow(2, numVariables);

    for (let i = 0; i < numCombinations; i++) {
      const row = {};
      for (let j = 0; j < numVariables; j++) {
        const variable = variables[j];
        row[variable] = (i >> j) & 1;
      }
      rows.push(row);
    }

    // Evaluate the predicate for each combination and store the results
    rows.forEach(row => {
      const evalPredicate = new Function(...variables, `return ${predicate}`);
      const result = evalPredicate(...Object.values(row));
      row['Result'] = result ? 1 : 0;
    });

    this.setState({ rows });
  }

  render() {
    return (
      <div className="truth-table-container">
        <h2>Enter Predicate:</h2>
        <input
          type="text"
          value={this.state.predicate}
          onChange={this.handleChange}
          placeholder="Enter predicate"
        />
        <button onClick={this.generateTruthTable}>Generate Truth Table</button>
        <table className="truth-table">
          <thead>
            <tr>
              {Object.keys(this.state.rows[0] || {}).map((key, index) => (
                <th key={index}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {this.state.rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {Object.values(row).map((value, colIndex) => (
                  <td key={colIndex}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TruthTable;
*/



// Working with =
/*
import React from 'react';
import './TruthTable.css';

class TruthTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      predicate: '',
      rows: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.generateTruthTable = this.generateTruthTable.bind(this);
  }

  handleChange(event) {
    this.setState({ predicate: event.target.value });
  }

  generateTruthTable() {
    const { predicate } = this.state;
    const rows = [];
    
    // Generate all possible combinations of true/false for variables in the predicate
    const variables = predicate.split(/[&|!>|^=]/).filter(Boolean);
    const numVariables = new Set(variables).size;
    const numCombinations = Math.pow(2, numVariables);

    for (let i = 0; i < numCombinations; i++) {
      const row = {};
      for (let j = 0; j < numVariables; j++) {
        const variable = variables[j];
        row[variable] = (i >> j) & 1;
      }
      rows.push(row);
    }

    // Evaluate the predicate for each combination and store the results
    rows.forEach(row => {
      const evalPredicate = new Function(...variables, `return ${predicate}`);
      const result = evalPredicate(...Object.values(row));
      row['Result'] = result ? 1 : 0;
    });

    // Adjust the result for equivalence operator
    rows.forEach(row => {
      if (predicate.includes('=')) {
        const variables = Object.keys(row);
        const [var1, var2] = predicate.split('=').map(item => item.trim());
        const value1 = row[var1];
        const value2 = row[var2];
        row['Result'] = value1 === value2 ? 1 : 0;
      }
    });

    this.setState({ rows });
  }

  render() {
    return (
      <div className="truth-table-container">
        <h2>Enter Predicate:</h2>
        <input
          type="text"
          value={this.state.predicate}
          onChange={this.handleChange}
          placeholder="Enter predicate"
        />
        <button onClick={this.generateTruthTable}>Generate Truth Table</button>
        <table className="truth-table">
          <thead>
            <tr>
              {Object.keys(this.state.rows[0] || {}).map((key, index) => (
                <th key={index}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {this.state.rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {Object.values(row).map((value, colIndex) => (
                  <td key={colIndex}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TruthTable;
*/











/*
import React from 'react';
import './TruthTable.css';

class TruthTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      predicate: '',
      rows: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.generateTruthTable = this.generateTruthTable.bind(this);
  }

  handleChange(event) {
    this.setState({ predicate: event.target.value });
  }

  generateTruthTable() {
    const { predicate } = this.state;
    const rows = [];
    
    // Generate all possible combinations of true/false for variables in the predicate
    const variables = this.extractVariables(predicate);
    const numVariables = variables.length;
    const numCombinations = Math.pow(2, numVariables);

    for (let i = 0; i < numCombinations; i++) {
      const row = {};
      for (let j = 0; j < numVariables; j++) {
        const variable = variables[j];
        row[variable] = (i >> j) & 1;
      }
      rows.push(row);
    }

    // Evaluate the predicate for each combination and store the results
    rows.forEach(row => {
      const result = this.evaluateExpression(predicate, row);
      row['Result'] = result ? 1 : 0;
    });

    this.setState({ rows });
  }

  extractVariables(predicate) {
    return [...new Set(predicate.match(/[a-zA-Z]+/g))];
  }

  evaluateExpression(expression, row) {
    const variables = this.extractVariables(expression);
  
    // Replace each variable in the expression with its value from the row
    const replacedExpression = expression.replace(/[a-zA-Z]+/g, match => row[match]);
  
    // Replace implication operator (>) with its logical equivalent
    const replacedImplication = replacedExpression.replace(/>/g, '|| !');
  
    // Evaluate the expression
    try {
      const result = eval(replacedImplication);
      return !!result; // Convert result to boolean
    } catch (error) {
      console.error('Error evaluating expression:', error);
      return false;
    }
  }
  

  render() {
    return (
      <div className="truth-table-container">
        <h2>Enter Predicate:</h2>
        <input
          type="text"
          value={this.state.predicate}
          onChange={this.handleChange}
          placeholder="Enter predicate"
        />
        <button onClick={this.generateTruthTable}>Generate Truth Table</button>
        <table className="truth-table">
          <thead>
            <tr>
              {Object.keys(this.state.rows[0] || {}).map((key, index) => (
                <th key={index}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {this.state.rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {Object.values(row).map((value, colIndex) => (
                  <td key={colIndex}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TruthTable;
*/











// working with ()
/*
import React from 'react';
import './TruthTable.css';

class TruthTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      predicate: '',
      rows: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.generateTruthTable = this.generateTruthTable.bind(this);
  }

  handleChange(event) {
    this.setState({ predicate: event.target.value });
  }

  generateTruthTable() {
    const { predicate } = this.state;
    const rows = [];
    
    // Generate all possible combinations of true/false for variables in the predicate
    const variables = this.extractVariables(predicate);
    const numVariables = variables.length;
    const numCombinations = Math.pow(2, numVariables);

    for (let i = 0; i < numCombinations; i++) {
      const row = {};
      for (let j = 0; j < numVariables; j++) {
        const variable = variables[j];
        row[variable] = (i >> j) & 1;
      }
      rows.push(row);
    }

    // Evaluate the predicate for each combination and store the results
    rows.forEach(row => {
      const result = this.evaluateExpression(predicate, row);
      row['Result'] = result ? 1 : 0;
    });

    this.setState({ rows });
  }

  extractVariables(predicate) {
    return [...new Set(predicate.match(/[a-zA-Z]+/g))];
  }

  evaluateExpression(expression, row) {
    const variables = this.extractVariables(expression);

    // Replace each variable in the expression with its value from the row
    const replacedExpression = expression.replace(/[a-zA-Z]+/g, match => row[match]);

    // Evaluate the expression
    try {
      const result = eval(replacedExpression);
      return !!result; // Convert result to boolean
    } catch (error) {
      console.error('Error evaluating expression:', error);
      return false;
    }
  }

  render() {
    return (
      <div className="truth-table-container">
        <h2>Enter Predicate:</h2>
        <input
          type="text"
          value={this.state.predicate}
          onChange={this.handleChange}
          placeholder="Enter predicate"
        />
        <button onClick={this.generateTruthTable}>Generate Truth Table</button>
        <table className="truth-table">
          <thead>
            <tr>
              {Object.keys(this.state.rows[0] || {}).map((key, index) => (
                <th key={index}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {this.state.rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {Object.values(row).map((value, colIndex) => (
                  <td key={colIndex}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TruthTable;
*/















/*
import React from 'react';
import './TruthTable.css';

class TruthTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      predicate: '',
      rows: [],
      trueCases: [],
      falseCases: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.generateTruthTable = this.generateTruthTable.bind(this);
    this.handlePredicateCoverage = this.handlePredicateCoverage.bind(this);
    this.handleCombinatorialCoverage = this.handleCombinatorialCoverage.bind(this);
  }

  handleChange(event) {
    this.setState({ predicate: event.target.value });
  }

  generateTruthTable() {
    const { predicate } = this.state;
    const rows = [];
    
    // Generate all possible combinations of true/false for variables in the predicate
    const variables = this.extractVariables(predicate);
    const numVariables = variables.length;
    const numCombinations = Math.pow(2, numVariables);

    for (let i = 0; i < numCombinations; i++) {
      const row = {};
      for (let j = 0; j < numVariables; j++) {
        const variable = variables[j];
        row[variable] = (i >> j) & 1;
      }
      rows.push(row);
    }

    // Evaluate the predicate for each combination and store the results
    const trueCases = [];
    const falseCases = [];
    rows.forEach(row => {
      const result = this.evaluateExpression(predicate, row);
      row['Result'] = result ? 1 : 0;
      if (result) {
        trueCases.push(row);
      } else {
        falseCases.push(row);
      }
    });

    this.setState({ rows, trueCases, falseCases });
  }

  extractVariables(predicate) {
    return [...new Set(predicate.match(/[a-zA-Z]+/g))];
  }

  evaluateExpression(expression, row) {
    const variables = this.extractVariables(expression);

    // Replace each variable in the expression with its value from the row
    const replacedExpression = expression.replace(/[a-zA-Z]+/g, match => row[match]);

    // Evaluate the expression
    try {
      const result = eval(replacedExpression);
      return !!result; // Convert result to boolean
    } catch (error) {
      console.error('Error evaluating expression:', error);
      return false;
    }
  }

  handlePredicateCoverage() {
    // Handle Predicate Coverage button click
    this.generateTruthTable();
    // Display true and false cases
    console.log("True");
    this.state.trueCases.forEach(row => {
      console.log(`a=${row['a']}, b=${row['b']}, result=${row['Result']}`);
    });
    console.log("False");
    this.state.falseCases.forEach(row => {
      console.log(`a=${row['a']}, b=${row['b']}, result=${row['Result']}`);
    });
  }

  handleCombinatorialCoverage() {
    // Handle Combinatorial Coverage button click
    // This functionality is left to be implemented according to specific requirements
    console.log("Combinatorial Coverage");
  }

  render() {
    return (
      <div className="truth-table-container">
        <h2>Enter Predicate:</h2>
        <input
          type="text"
          value={this.state.predicate}
          onChange={this.handleChange}
          placeholder="Enter predicate"
        />
        <button onClick={this.handlePredicateCoverage}>Predicate Coverage</button>
        <button onClick={this.handleCombinatorialCoverage}>Combinatorial Coverage</button>
        <table className="truth-table">
          <thead>
            <tr>
              {Object.keys(this.state.rows[0] || {}).map((key, index) => (
                <th key={index}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {this.state.rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {Object.values(row).map((value, colIndex) => (
                  <td key={colIndex}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TruthTable;
*/












// Predicate Coverage - True & False
/*
import React from 'react';
import './TruthTable.css';

class TruthTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      predicate: '',
      trueRows: [],
      falseRows: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.generateTruthTable = this.generateTruthTable.bind(this);
  }

  handleChange(event) {
    this.setState({ predicate: event.target.value });
  }

  generateTruthTable() {
    const { predicate } = this.state;
    const trueRows = [];
    const falseRows = [];
    
    // Generate all possible combinations of true/false for variables in the predicate
    const variables = this.extractVariables(predicate);
    const numVariables = variables.length;
    const numCombinations = Math.pow(2, numVariables);

    for (let i = 0; i < numCombinations; i++) {
      const row = {};
      for (let j = 0; j < numVariables; j++) {
        const variable = variables[j];
        row[variable] = (i >> j) & 1;
      }
      const result = this.evaluateExpression(predicate, row);
      row['Result'] = result ? 1 : 0;
      if (result) {
        trueRows.push(row);
      } else {
        falseRows.push(row);
      }
    }

    this.setState({ trueRows, falseRows });
  }

  extractVariables(predicate) {
    return [...new Set(predicate.match(/[a-zA-Z]+/g))];
  }

  evaluateExpression(expression, row) {
    const variables = this.extractVariables(expression);

    // Replace each variable in the expression with its value from the row
    const replacedExpression = expression.replace(/[a-zA-Z]+/g, match => row[match]);

    // Evaluate the expression
    try {
      const result = eval(replacedExpression);
      return !!result; // Convert result to boolean
    } catch (error) {
      console.error('Error evaluating expression:', error);
      return false;
    }
  }

  render() {
    return (
      <div className="truth-table-container">
        <h2>Enter Predicate:</h2>
        <input
          type="text"
          value={this.state.predicate}
          onChange={this.handleChange}
          placeholder="Enter predicate"
        />
        <button onClick={this.generateTruthTable}>Generate Truth Table</button>

        <h3>True</h3>
        <table className="truth-table">
          <thead>
            <tr>
              {Object.keys(this.state.trueRows[0] || {}).map((key, index) => (
                <th key={index}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {this.state.trueRows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {Object.values(row).map((value, colIndex) => (
                  <td key={colIndex}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        <h3>False</h3>
        <table className="truth-table">
          <thead>
            <tr>
              {Object.keys(this.state.falseRows[0] || {}).map((key, index) => (
                <th key={index}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {this.state.falseRows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {Object.values(row).map((value, colIndex) => (
                  <td key={colIndex}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TruthTable;
*/











//Working with Predicate and Combinatorial
/*
import React from 'react';
import './TruthTable.css';

class TruthTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      predicate: '',
      trueRows: [],
      falseRows: [],
      showTruthTable: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.generateTruthTable = this.generateTruthTable.bind(this);
    this.handlePredicateCoverage = this.handlePredicateCoverage.bind(this);
    this.handleCombinatorialCoverage = this.handleCombinatorialCoverage.bind(this);
  }

  handleChange(event) {
    this.setState({ predicate: event.target.value });
  }

  generateTruthTable() {
    const { predicate } = this.state;
    const trueRows = [];
    const falseRows = [];
    
    // Generate all possible combinations of true/false for variables in the predicate
    const variables = this.extractVariables(predicate);
    const numVariables = variables.length;
    const numCombinations = Math.pow(2, numVariables);

    for (let i = 0; i < numCombinations; i++) {
      const row = {};
      for (let j = 0; j < numVariables; j++) {
        const variable = variables[j];
        row[variable] = (i >> j) & 1;
      }
      const result = this.evaluateExpression(predicate, row);
      row['Result'] = result ? 1 : 0;
      if (result) {
        trueRows.push(row);
      } else {
        falseRows.push(row);
      }
    }

    this.setState({ trueRows, falseRows, showTruthTable: true });
  }

  handlePredicateCoverage() {
    this.generateTruthTable();
    this.setState({ showTruthTable: false });
  }

  handleCombinatorialCoverage() {
    const { predicate } = this.state;
    const rows = [];
    
    // Generate all possible combinations of true/false for variables in the predicate
    const variables = this.extractVariables(predicate);
    const numVariables = variables.length;
    const numCombinations = Math.pow(2, numVariables);
  
    for (let i = 0; i < numCombinations; i++) {
      const row = {};
      for (let j = 0; j < numVariables; j++) {
        const variable = variables[j];
        row[variable] = (i >> j) & 1;
      }
      const result = this.evaluateExpression(predicate, row);
      row['Result'] = result ? 1 : 0;
      rows.push(row);
    }
  
    this.setState({ trueRows: rows, showTruthTable: true });
  }
 
  

  extractVariables(predicate) {
    return [...new Set(predicate.match(/[a-zA-Z]+/g))];
  }

  evaluateExpression(expression, row) {
    const variables = this.extractVariables(expression);

    // Replace each variable in the expression with its value from the row
    const replacedExpression = expression.replace(/[a-zA-Z]+/g, match => row[match]);

    // Evaluate the expression
    try {
      const result = eval(replacedExpression);
      return !!result; // Convert result to boolean
    } catch (error) {
      console.error('Error evaluating expression:', error);
      return false;
    }
  }

  render() {
    return (
      <div className="truth-table-container">
        <h2>Enter Predicate:</h2>
        <input
          type="text"
          value={this.state.predicate}
          onChange={this.handleChange}
          placeholder="Enter predicate"
        />
        <button onClick={this.handlePredicateCoverage}>Predicate Coverage</button>
        <button onClick={this.handleCombinatorialCoverage}>Combinatorial Coverage</button>

        {this.state.showTruthTable && (
          <table className="truth-table">
            <thead>
              <tr>
                {Object.keys(this.state.trueRows[0] || {}).map((key, index) => (
                  <th key={index}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {this.state.trueRows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {Object.values(row).map((value, colIndex) => (
                    <td key={colIndex}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {!this.state.showTruthTable && (
          <div>
            <h3>True</h3>
            <table className="truth-table">
              <thead>
                <tr>
                  {Object.keys(this.state.trueRows[0] || {}).map((key, index) => (
                    <th key={index}>{key}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {this.state.trueRows.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {Object.values(row).map((value, colIndex) => (
                      <td key={colIndex}>{value}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>

            <h3>False</h3>
            <table className="truth-table">
              <thead>
                <tr>
                  {Object.keys(this.state.falseRows[0] || {}).map((key, index) => (
                    <th key={index}>{key}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {this.state.falseRows.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {Object.values(row).map((value, colIndex) => (
                      <td key={colIndex}>{value}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
}

export default TruthTable;
*/





/*

import React from 'react';
import './TruthTable.css';

class TruthTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      predicate: '',
      trueRows: [],
      showTruthTable: true,
      clausePairs: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.generateTruthTable = this.generateTruthTable.bind(this);
    this.handlePredicateCoverage = this.handlePredicateCoverage.bind(this);
    this.handleCombinatorialCoverage = this.handleCombinatorialCoverage.bind(this);
    this.handleActiveClauseCoverage = this.handleActiveClauseCoverage.bind(this);
  }

  handleChange(event) {
    this.setState({ predicate: event.target.value });
  }

  generateTruthTable() {
    const { predicate } = this.state;
    const trueRows = [];
    
    // Generate all possible combinations of true/false for variables in the predicate
    const variables = this.extractVariables(predicate);
    const numVariables = variables.length;
    const numCombinations = Math.pow(2, numVariables);

    for (let i = 0; i < numCombinations; i++) {
      const row = {};
      for (let j = 0; j < numVariables; j++) {
        const variable = variables[j];
        row[variable] = (i >> j) & 1;
      }
      const result = this.evaluateExpression(predicate, row);
      row['Result'] = result ? 1 : 0;
      if (result) {
        trueRows.push(row);
      }
    }

    this.setState({ trueRows, showTruthTable: true });
  }

  handlePredicateCoverage() {
    this.generateTruthTable();
    this.setState({ showTruthTable: false });
  }

  handleCombinatorialCoverage() {
    const { predicate } = this.state;
    const trueRows = [];
    
    // Generate all possible combinations of true/false for variables in the predicate
    const variables = this.extractVariables(predicate);
    const numVariables = variables.length;
    const numCombinations = Math.pow(2, numVariables);

    for (let i = 0; i < numCombinations; i++) {
      const row = {};
      for (let j = 0; j < numVariables; j++) {
        const variable = variables[j];
        row[variable] = (i >> j) & 1;
      }
      const result = this.evaluateExpression(predicate, row);
      row['Result'] = result ? 1 : 0;
      trueRows.push(row);
    }

    this.setState({ trueRows, showTruthTable: true });
  }

  handleActiveClauseCoverage() {
    const { predicate } = this.state;
    const rows = [];
    const clausePairs = {};

    // Generate all possible combinations of true/false for variables in the predicate
    const variables = this.extractVariables(predicate);
    const numVariables = variables.length;
    const numCombinations = Math.pow(2, numVariables);

    for (let i = 0; i < numCombinations; i++) {
      const row = {};
      for (let j = 0; j < numVariables; j++) {
        const variable = variables[j];
        row[variable] = (i >> j) & 1;
      }
      const result = this.evaluateExpression(predicate, row);
      row['Result'] = result ? 1 : 0;
      rows.push(row);
    }

    // Generate clause pairs
    for (let k = 0; k < variables.length; k++) {
      const t = [];
      const f = [];
      for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        if (row.Result === 1) {
          t.push(i + 1);
        } else {
          f.push(i + 1);
        }
      }
      const gacc = [];
      for (let i = 0; i < t.length; i++) {
        for (let j = 0; j < f.length; j++) {
          gacc.push([t[i], f[j]]);
        }
      }
      clausePairs[variables[k]] = gacc;
    }

    this.setState({ trueRows: rows, showTruthTable: true, clausePairs });
  }

  extractVariables(predicate) {
    return [...new Set(predicate.match(/[a-zA-Z]+/g))];
  }

  evaluateExpression(expression, row) {
    const variables = this.extractVariables(expression);

    // Replace each variable in the expression with its value from the row
    const replacedExpression = expression.replace(/[a-zA-Z]+/g, match => row[match]);

    // Evaluate the expression
    try {
      const result = eval(replacedExpression);
      return !!result; // Convert result to boolean
    } catch (error) {
      console.error('Error evaluating expression:', error);
      return false;
    }
  }

  render() {
    return (
      <div className="truth-table-container">
        <h2>Enter Predicate:</h2>
        <input
          type="text"
          value={this.state.predicate}
          onChange={this.handleChange}
          placeholder="Enter predicate"
        />
        <button onClick={this.handlePredicateCoverage}>Predicate Coverage</button>
        <button onClick={this.handleCombinatorialCoverage}>Combinatorial Coverage</button>
        <button onClick={this.handleActiveClauseCoverage}>Active Clause Coverage</button>
  
        {this.state.showTruthTable && (
          <table className="truth-table">
            <thead>
              <tr>
                <th>Row</th>
                {Object.keys(this.state.trueRows[0] || {}).map((key, index) => (
                  <th key={index}>{key}</th>
                ))}
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              {this.state.trueRows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  <td>{rowIndex + 1}</td>
                  {Object.values(row).map((value, colIndex) => (
                    <td key={colIndex}>{value}</td>
                  ))}
                  <td>{row['Result']}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
  
        {!this.state.showTruthTable && (
          <div>
            {Object.keys(this.state.clausePairs).map((key, index) => (
              <div key={index}>
                <h3>{key} Clause Pairs</h3>
                <ul>
                  {this.state.clausePairs[key].map((pair, pairIndex) => (
                    <li key={pairIndex}>({pair[0]}, {pair[1]})</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default TruthTable;
*/











/*

import React from 'react';
import './TruthTable.css';

class TruthTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      predicate: '',
      trueRows: [],
      falseRows: [],
      showTruthTable: true,
      error: null, // New state to hold error information
    };
    this.handleChange = this.handleChange.bind(this);
    this.generateTruthTable = this.generateTruthTable.bind(this);
    this.handlePredicateCoverage = this.handlePredicateCoverage.bind(this);
    this.handleCombinatorialCoverage = this.handleCombinatorialCoverage.bind(this);
  }

  handleChange(event) {
    // const predicate = event.target.value.replace(/[^a-zA-Z()&|!^]/g, ''); // Filter out invalid characters
    // this.setState({ predicate });


  //   const { value } = event.target;
  // const invalidChars = value.match(/[^a-zA-Z()&|!= ^]/g);
  // if (invalidChars) {
  //   const errorMessage = `Invalid character(s): ${invalidChars.join(', ')}`;
  //   this.setState({ error: errorMessage });
  // } else {
  //   this.setState({ predicate: value, error: null });
  // }

  // const { value } = event.target;
  // const invalidChars = value.match(/[^a-zA-Z()&|! ^]/g);
  // if (invalidChars) {
  //   const errorMessage = `Invalid character(s): ${invalidChars.join(', ')}`;
  //   this.setState({ predicate: value, error: errorMessage });
  // } else {
  //   this.setState({ predicate: value, error: null });
  // }







  // const { value } = event.target;
  // if (!value.trim()) { // Check if the value is empty or contains only whitespace
  //   const errorMessage = 'Predicate cannot be empty';
  //   this.setState({ predicate: value, error: errorMessage });
  // } else {
  //   const invalidChars = value.match(/[^a-zA-Z()&|! ^]/g);
  //   if (invalidChars) {
  //     const errorMessage = `Invalid character(s): ${invalidChars.join(', ')}`;
  //     this.setState({ predicate: value, error: errorMessage });
  //   } else {
  //     this.setState({ predicate: value, error: null });
  //   }
  // }


  // const { value } = event.target;
  // if (!value.trim()) { // Check if the value is empty or contains only whitespace
  //   const errorMessage = 'Predicate cannot be empty';
  //   this.setState({ predicate: value, error: errorMessage });
  // } else {
  //   const invalidChars = value.match(/[^a-zA-Z0-9()&|! ^]|(?<![a-zA-Z])[0-9]+(?![a-zA-Z])/g);
  //   if (invalidChars) {
  //     const errorMessage = `Invalid character(s): ${invalidChars.join(', ')}`;
  //     this.setState({ predicate: value, error: errorMessage });
  //   } else {
  //     this.setState({ predicate: value, error: null });
  //   }
  // }


  const { value } = event.target;
  if (!value.trim()) {
    this.setState({ predicate: value, error: null, showTruthTable: false });
  } else {
    const invalidChars = value.match(/[^a-zA-Z0-9()&|! ^]|(?<![a-zA-Z])[0-9]+(?![a-zA-Z])/g);
    if (invalidChars) {
      const errorMessage = `Invalid character(s): ${invalidChars.join(', ')}`;
      this.setState({ predicate: value, error: errorMessage });
    } else {
      this.setState({ predicate: value, error: null });
    }
  }
  }

  generateTruthTable() {
    const { predicate } = this.state;
    const trueRows = [];
    const falseRows = [];
    
    // Generate all possible combinations of true/false for variables in the predicate
    const variables = this.extractVariables(predicate);
    const numVariables = variables.length;
    const numCombinations = Math.pow(2, numVariables);

    try {
      for (let i = 0; i < numCombinations; i++) {
        const row = {};
        for (let j = 0; j < numVariables; j++) {
          const variable = variables[j];
          row[variable] = (i >> j) & 1;
        }
        const result = this.evaluateExpression(predicate, row);
        row['Result'] = result ? 1 : 0;
        if (result) {
          trueRows.push(row);
        } else {
          falseRows.push(row);
        }
      }
  
      this.setState({ trueRows, falseRows, showTruthTable: true, error: null });
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  handlePredicateCoverage() {
    this.generateTruthTable();
    this.setState({ showTruthTable: false });
  }

  handleCombinatorialCoverage() {
    const { predicate } = this.state;
    const rows = [];
    
    // Generate all possible combinations of true/false for variables in the predicate
    const variables = this.extractVariables(predicate);
    const numVariables = variables.length;
    const numCombinations = Math.pow(2, numVariables);
  
    try {
      for (let i = 0; i < numCombinations; i++) {
        const row = {};
        for (let j = 0; j < numVariables; j++) {
          const variable = variables[j];
          row[variable] = (i >> j) & 1;
        }
        const result = this.evaluateExpression(predicate, row);
        row['Result'] = result ? 1 : 0;
        rows.push(row);
      }
    
      this.setState({ trueRows: rows, showTruthTable: true, error: null });
    } catch (error) {
      this.setState({ error: error.message });
    }
  }
 
  

  extractVariables(predicate) {
    return [...new Set(predicate.match(/[a-zA-Z]+/g))];
  }

  evaluateExpression(expression, row) {
    const variables = this.extractVariables(expression);

    // Replace each variable in the expression with its value from the row
    const replacedExpression = expression.replace(/[a-zA-Z]+/g, match => row[match]);

    // Evaluate the expression
    try {
      const result = eval(replacedExpression);
      return !!result; // Convert result to boolean
    } catch (error) {
      throw new Error('Error evaluating expression: ' + error.message);
    }
  }

  render() {
    return (
      <div className="truth-table-container">
        <h2>Enter Predicate:</h2>
        <input
          type="text"
          value={this.state.predicate}
          onChange={this.handleChange}
          placeholder="Enter predicate"
        />
        <button onClick={this.handlePredicateCoverage}>Predicate Coverage</button>
        <button onClick={this.handleCombinatorialCoverage}>Combinatorial Coverage</button>

        {this.state.error && <p className="error">{this.state.error}</p>}

        {this.state.showTruthTable && (
          <table className="truth-table">
            <thead>
              <tr>
                {Object.keys(this.state.trueRows[0] || {}).map((key, index) => (
                  <th key={index}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {this.state.trueRows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {Object.values(row).map((value, colIndex) => (
                    <td key={colIndex}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {!this.state.showTruthTable && (
          <div>
            <h3>True</h3>
            <table className="truth-table">
              <thead>
                <tr>
                  {Object.keys(this.state.trueRows[0] || {}).map((key, index) => (
                    <th key={index}>{key}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {this.state.trueRows.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {Object.values(row).map((value, colIndex) => (
                      <td key={colIndex}>{value}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>

            <h3>False</h3>
            <table className="truth-table">
              <thead>
                <tr>
                  {Object.keys(this.state.falseRows[0] || {}).map((key, index) => (
                    <th key={index}>{key}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {this.state.falseRows.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {Object.values(row).map((value, colIndex) => (
                      <td key={colIndex}>{value}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
}

export default TruthTable;

*/










// Working

/*
import React from 'react';
import './TruthTable.css';

class TruthTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      predicate: '',
      trueRows: [],
      falseRows: [],
      showTruthTable: true,
      error: null, // New state to hold error information
    };
    this.handleChange = this.handleChange.bind(this);
    this.generateTruthTable = this.generateTruthTable.bind(this);
    this.handlePredicateCoverage = this.handlePredicateCoverage.bind(this);
    this.handleCombinatorialCoverage = this.handleCombinatorialCoverage.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    if (!value.trim()) {
      this.setState({ predicate: value, error: null, showTruthTable: false });
    } else {
      const invalidChars = value.match(/[^a-zA-Z0-9()&|! ^]|(?<![a-zA-Z])[0-9]+(?![a-zA-Z])/g);
      if (invalidChars) {
        const errorMessage = `Invalid character(s): ${invalidChars.join(', ')}`;
        this.setState({ predicate: value, error: errorMessage });
      } else {
        this.setState({ predicate: value, error: null });
      }
    }
    }
  
    generateTruthTable() {
      const { predicate } = this.state;
      const trueRows = [];
      const falseRows = [];
      
      // Generate all possible combinations of true/false for variables in the predicate
      const variables = this.extractVariables(predicate);
      const numVariables = variables.length;
      const numCombinations = Math.pow(2, numVariables);
  
      try {
        for (let i = 0; i < numCombinations; i++) {
          const row = {};
          for (let j = 0; j < numVariables; j++) {
            const variable = variables[j];
            row[variable] = (i >> j) & 1;
          }
          const result = this.evaluateExpression(predicate, row);
          row['Result'] = result ? 1 : 0;
          if (result) {
            trueRows.push(row);
          } else {
            falseRows.push(row);
          }
        }
    
        this.setState({ trueRows, falseRows, showTruthTable: true, error: null });
      } catch (error) {
        this.setState({ error: error.message });
      }
    }
  
    handlePredicateCoverage() {
      this.generateTruthTable();
      this.setState({ showTruthTable: false });
    }
  
    handleCombinatorialCoverage() {
      const { predicate } = this.state;
      const rows = [];
      
      // Generate all possible combinations of true/false for variables in the predicate
      const variables = this.extractVariables(predicate);
      const numVariables = variables.length;
      const numCombinations = Math.pow(2, numVariables);
    
      try {
        for (let i = 0; i < numCombinations; i++) {
          const row = {};
          for (let j = 0; j < numVariables; j++) {
            const variable = variables[j];
            row[variable] = (i >> j) & 1;
          }
          const result = this.evaluateExpression(predicate, row);
          row['Result'] = result ? 1 : 0;
          rows.push(row);
        }
      
        this.setState({ trueRows: rows, showTruthTable: true, error: null });
      } catch (error) {
        this.setState({ error: error.message });
      }
    }
   
    
  
    extractVariables(predicate) {
      return [...new Set(predicate.match(/[a-zA-Z]+/g))];
    }
  
    evaluateExpression(expression, row) {
      const variables = this.extractVariables(expression);
  
      // Replace each variable in the expression with its value from the row
      const replacedExpression = expression.replace(/[a-zA-Z]+/g, match => row[match]);
  
      // Evaluate the expression
      try {
        const result = eval(replacedExpression);
        return !!result; // Convert result to boolean
      } catch (error) {
        throw new Error('Error evaluating expression: ' + error.message);
      }
    }
  
    render() {
      return (
        <div className="truth-table-container">
          <h2>Enter Predicate:</h2>
          <input
            type="text"
            value={this.state.predicate}
            onChange={this.handleChange}
            placeholder="Enter predicate"
          />
          <button onClick={this.handlePredicateCoverage}>Predicate Coverage</button>
          <button onClick={this.handleCombinatorialCoverage}>Combinatorial Coverage</button>
  
          {this.state.error && <p className="error">{this.state.error}</p>}
  
          {this.state.showTruthTable && (
            <table className="truth-table">
              <thead>
                <tr>
                  {Object.keys(this.state.trueRows[0] || {}).map((key, index) => (
                    <th key={index}>{key}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {this.state.trueRows.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {Object.values(row).map((value, colIndex) => (
                      <td key={colIndex}>{value}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
  
          {!this.state.showTruthTable && (
            <div>
              <h3>True</h3>
              <table className="truth-table">
                <thead>
                  <tr>
                    {Object.keys(this.state.trueRows[0] || {}).map((key, index) => (
                      <th key={index}>{key}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {this.state.trueRows.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {Object.values(row).map((value, colIndex) => (
                        <td key={colIndex}>{value}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
  
              <h3>False</h3>
              <table className="truth-table">
                <thead>
                  <tr>
                    {Object.keys(this.state.falseRows[0] || {}).map((key, index) => (
                      <th key={index}>{key}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {this.state.falseRows.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {Object.values(row).map((value, colIndex) => (
                        <td key={colIndex}>{value}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      );
    }
  }
  
export default TruthTable;
*/









// Working without =
/*
import React from 'react';
import './TruthTable.css';

class TruthTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      predicate: '',
      trueRows: [],
      falseRows: [],
      showTruthTable: true,
      error: null, // New state to hold error information
    };
    this.handleChange = this.handleChange.bind(this);
    this.generateTruthTable = this.generateTruthTable.bind(this);
    this.handlePredicateCoverage = this.handlePredicateCoverage.bind(this);
    this.handleCombinatorialCoverage = this.handleCombinatorialCoverage.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    if (!value.trim()) {
      this.setState({ predicate: value, error: null, showTruthTable: false });
    } else {
      const invalidChars = value.match(/[^a-zA-Z0-9()&|!^ ]|(?<![a-zA-Z0-9])[0-9]+(?![a-zA-Z0-9])/g);
      if (invalidChars) {
        const errorMessage = `Invalid character(s): ${invalidChars.join(', ')}`;
        this.setState({ predicate: value, error: errorMessage });
      } else {
        this.setState({ predicate: value, error: null });
      }
    }
  }

  generateTruthTable() {
    const { predicate } = this.state;
    const trueRows = [];
    const falseRows = [];

    // Generate all possible combinations of true/false for variables in the predicate
    const variables = this.extractVariables(predicate);
    const numVariables = variables.length;
    const numCombinations = Math.pow(2, numVariables);

    try {
      for (let i = 0; i < numCombinations; i++) {
        const row = {};
        for (let j = 0; j < numVariables; j++) {
          const variable = variables[j];
          row[variable] = (i >> j) & 1;
        }
        const result = this.evaluateExpression(predicate, row);
        row['Result'] = result ? 1 : 0;
        if (result) {
          trueRows.push(row);
        } else {
          falseRows.push(row);
        }
      }

      this.setState({ trueRows, falseRows, showTruthTable: true, error: null });
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  handlePredicateCoverage() {
    this.generateTruthTable();
    this.setState({ showTruthTable: false });
  }

  handleCombinatorialCoverage() {
    const { predicate } = this.state;
    const rows = [];

    // Generate all possible combinations of true/false for variables in the predicate
    const variables = this.extractVariables(predicate);
    const numVariables = variables.length;
    const numCombinations = Math.pow(2, numVariables);

    try {
      for (let i = 0; i < numCombinations; i++) {
        const row = {};
        for (let j = 0; j < numVariables; j++) {
          const variable = variables[j];
          row[variable] = (i >> j) & 1;
        }
        const result = this.evaluateExpression(predicate, row);
        row['Result'] = result ? 1 : 0;
        rows.push(row);
      }

      this.setState({ trueRows: rows, showTruthTable: true, error: null });
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  extractVariables(predicate) {
    return [...new Set(predicate.match(/[a-zA-Z0-9]+/g))];
  }

  evaluateExpression(expression, row) {
    const variables = this.extractVariables(expression);

    // Replace each variable in the expression with its value from the row
    const replacedExpression = expression.replace(/[a-zA-Z0-9]+/g, match => row[match]);
    
    // Evaluate the expression
    try {
      const result = eval(replacedExpression);
      return !!result; // Convert result to boolean
    } catch (error) {
      throw new Error('Error evaluating expression: ' + error.message);
    }
  }

  render() {
    return (
      <div className="truth-table-container">
        <h2>Enter Predicate:</h2>
        <input
          type="text"
          value={this.state.predicate}
          onChange={this.handleChange}
          placeholder="Enter predicate"
        />
        <button onClick={this.handlePredicateCoverage}>Predicate Coverage</button>
        <button onClick={this.handleCombinatorialCoverage}>Combinatorial Coverage</button>

        {this.state.error && <p className="error">{this.state.error}</p>}

        {this.state.showTruthTable && (
          <table className="truth-table">
            <thead>
              <tr>
                {Object.keys(this.state.trueRows[0] || {}).map((key, index) => (
                  <th key={index}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {this.state.trueRows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {Object.values(row).map((value, colIndex) => (
                    <td key={colIndex}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {!this.state.showTruthTable && (
          <div>
            <h3>True</h3>
            <table className="truth-table">
              <thead>
                <tr>
                  {Object.keys(this.state.trueRows[0] || {}).map((key, index) => (
                    <th key={index}>{key}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {this.state.trueRows.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {Object.values(row).map((value, colIndex) => (
                      <td key={colIndex}>{value}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>

            <h3>False</h3>
            <table className="truth-table">
              <thead>
                <tr>
                  {Object.keys(this.state.falseRows[0] || {}).map((key, index) => (
                    <th key={index}>{key}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {this.state.falseRows.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {Object.values(row).map((value, colIndex) => (
                      <td key={colIndex}>{value}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
}

export default TruthTable;
*/
















// Working with Predicate and Combinatorial
/*
import React from 'react';
import './TruthTable.css';

class TruthTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      predicate: '',
      trueRows: [],
      falseRows: [],
      showTruthTable: true,
      error: null, // New state to hold error information
    };
    this.handleChange = this.handleChange.bind(this);
    this.generateTruthTable = this.generateTruthTable.bind(this);
    this.handlePredicateCoverage = this.handlePredicateCoverage.bind(this);
    this.handleCombinatorialCoverage = this.handleCombinatorialCoverage.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    if (!value.trim()) {
      this.setState({ predicate: value, error: null, showTruthTable: false });
    } else {
      const invalidChars = value.match(/[^a-zA-Z0-9()&|!^= ]|(?<![a-zA-Z0-9])[0-9]+(?![a-zA-Z0-9])/g);
      if (invalidChars) {
        const errorMessage = `Invalid character(s): ${invalidChars.join(', ')}`;
        this.setState({ predicate: value, error: errorMessage });
      } else {
        this.setState({ predicate: value, error: null });
      }
    }
  }

  generateTruthTable() {
    const { predicate } = this.state;
    const trueRows = [];
    const falseRows = [];

    // Generate all possible combinations of true/false for variables in the predicate
    const variables = this.extractVariables(predicate);
    const numVariables = variables.length;
    const numCombinations = Math.pow(2, numVariables);

    try {
      for (let i = 0; i < numCombinations; i++) {
        const row = {};
        for (let j = 0; j < numVariables; j++) {
          const variable = variables[j];
          row[variable] = (i >> j) & 1;
        }
        const result = this.evaluateExpression(predicate, row);
        row['Result'] = result ? 1 : 0;
        if (result) {
          trueRows.push(row);
        } else {
          falseRows.push(row);
        }
      }

      this.setState({ trueRows, falseRows, showTruthTable: true, error: null });
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  handlePredicateCoverage() {
    this.generateTruthTable();
    this.setState({ showTruthTable: false });
  }

  handleCombinatorialCoverage() {
    const { predicate } = this.state;
    const rows = [];

    // Generate all possible combinations of true/false for variables in the predicate
    const variables = this.extractVariables(predicate);
    const numVariables = variables.length;
    const numCombinations = Math.pow(2, numVariables);

    try {
      for (let i = 0; i < numCombinations; i++) {
        const row = {};
        for (let j = 0; j < numVariables; j++) {
          const variable = variables[j];
          row[variable] = (i >> j) & 1;
        }
        const result = this.evaluateExpression(predicate, row);
        row['Result'] = result ? 1 : 0;
        rows.push(row);
      }

      this.setState({ trueRows: rows, showTruthTable: true, error: null });
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  extractVariables(predicate) {
    return [...new Set(predicate.match(/[a-zA-Z0-9]+/g))];
  }

  evaluateExpression(expression, row) {
    const variables = this.extractVariables(expression);

    // Replace each variable in the expression with its value from the row
    let replacedExpression = expression.replace(/[a-zA-Z0-9]+/g, match => row[match]);

    // Replace equivalence operator (=) with logical AND operator (&&)
    replacedExpression = replacedExpression.replace(/=/g, '===');

    // Evaluate the expression
    try {
      const result = eval(replacedExpression);
      return !!result; // Convert result to boolean
    } catch (error) {
      throw new Error('Error evaluating expression: ' + error.message);
    }
  }

  render() {
    return (
      <div className="truth-table-container">
        <h2>Enter Predicate:</h2>
        <input
          type="text"
          value={this.state.predicate}
          onChange={this.handleChange}
          placeholder="Enter predicate"
        />
        <button onClick={this.handlePredicateCoverage}>Predicate Coverage</button>
        <button onClick={this.handleCombinatorialCoverage}>Combinatorial Coverage</button>

        {this.state.error && <p className="error">{this.state.error}</p>}

        {this.state.showTruthTable && (
          <table className="truth-table">
            <thead>
              <tr>
                {Object.keys(this.state.trueRows[0] || {}).map((key, index) => (
                  <th key={index}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {this.state.trueRows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {Object.values(row).map((value, colIndex) => (
                    <td key={colIndex}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {!this.state.showTruthTable && (
          <div>
            <h3>True</h3>
            <table className="truth-table">
              <thead>
                <tr>
                  {Object.keys(this.state.trueRows[0] || {}).map((key, index) => (
                    <th key={index}>{key}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {this.state.trueRows.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {Object.values(row).map((value, colIndex) => (
                      <td key={colIndex}>{value}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>

            <h3>False</h3>
            <table className="truth-table">
              <thead>
                <tr>
                  {Object.keys(this.state.falseRows[0] || {}).map((key, index) => (
                    <th key={index}>{key}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {this.state.falseRows.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {Object.values(row).map((value, colIndex) => (
                      <td key={colIndex}>{value}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
}

export default TruthTable;

*/







/*
import React from 'react';
import './TruthTable.css';
import ActiveClauseCoverage from './ActiveClauseCoverage';

class TruthTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      predicate: '',
      trueRows: [],
      falseRows: [],
      showTruthTable: true,
      error: null, // New state to hold error information
    };
    this.handleChange = this.handleChange.bind(this);
    this.generateTruthTable = this.generateTruthTable.bind(this);
    this.handlePredicateCoverage = this.handlePredicateCoverage.bind(this);
    this.handleCombinatorialCoverage = this.handleCombinatorialCoverage.bind(this);
    this.handleActiveClauseCoverage = this.handleActiveClauseCoverage.bind(this); // Added new handler for Active Clause Coverage
  }

  handleChange(event) {
    const { value } = event.target;
    if (!value.trim()) {
      this.setState({ predicate: value, error: null, showTruthTable: false });
    } else {
      const invalidChars = value.match(/[^a-zA-Z0-9()&|!^= ]|(?<![a-zA-Z0-9])[0-9]+(?![a-zA-Z0-9])/g);
      if (invalidChars) {
        const errorMessage = `Invalid character(s): ${invalidChars.join(', ')}`;
        this.setState({ predicate: value, error: errorMessage });
      } else {
        this.setState({ predicate: value, error: null });
      }
    }
  }

  generateTruthTable() {
    const { predicate } = this.state;
    const trueRows = [];
    const falseRows = [];

    // Generate all possible combinations of true/false for variables in the predicate
    const variables = this.extractVariables(predicate);
    const numVariables = variables.length;
    const numCombinations = Math.pow(2, numVariables);

    try {
      for (let i = 0; i < numCombinations; i++) {
        const row = {};
        for (let j = 0; j < numVariables; j++) {
          const variable = variables[j];
          row[variable] = (i >> j) & 1;
        }
        const result = this.evaluateExpression(predicate, row);
        row['Result'] = result ? 1 : 0;
        if (result) {
          trueRows.push(row);
        } else {
          falseRows.push(row);
        }
      }

      this.setState({ trueRows, falseRows, showTruthTable: true, error: null });
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  handlePredicateCoverage() {
    this.generateTruthTable();
    this.setState({ showTruthTable: false });
  }

  handleCombinatorialCoverage() {
    const { predicate } = this.state;
    const rows = [];

    // Generate all possible combinations of true/false for variables in the predicate
    const variables = this.extractVariables(predicate);
    const numVariables = variables.length;
    const numCombinations = Math.pow(2, numVariables);

    try {
      for (let i = 0; i < numCombinations; i++) {
        const row = {};
        for (let j = 0; j < numVariables; j++) {
          const variable = variables[j];
          row[variable] = (i >> j) & 1;
        }
        const result = this.evaluateExpression(predicate, row);
        row['Result'] = result ? 1 : 0;
        rows.push(row);
      }

      this.setState({ trueRows: rows, showTruthTable: true, error: null });
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  handleActiveClauseCoverage() {
    // Call the function from ActiveClauseCoverage.js
    ActiveClauseCoverage();
    // Hide other coverage results if necessary
    this.setState({ showTruthTable: false });
  }

  extractVariables(predicate) {
    return [...new Set(predicate.match(/[a-zA-Z0-9]+/g))];
  }

  evaluateExpression(expression, row) {
    const variables = this.extractVariables(expression);

    // Replace each variable in the expression with its value from the row
    let replacedExpression = expression.replace(/[a-zA-Z0-9]+/g, match => row[match]);

    // Replace equivalence operator (=) with logical AND operator (&&)
    replacedExpression = replacedExpression.replace(/=/g, '===');

    // Evaluate the expression
    try {
      const result = eval(replacedExpression);
      return !!result; // Convert result to boolean
    } catch (error) {
      throw new Error('Error evaluating expression: ' + error.message);
    }
  }

  render() {
    return (
      <div className="truth-table-container">
        <h2>Enter Predicate:</h2>
        <input
          type="text"
          value={this.state.predicate}
          onChange={this.handleChange}
          placeholder="Enter predicate"
        />
        <button onClick={this.handlePredicateCoverage}>Predicate Coverage</button>
        <button onClick={this.handleCombinatorialCoverage}>Combinatorial Coverage</button>
        <button onClick={this.handleActiveClauseCoverage}>Active Clause Coverage</button>
        
        {this.state.error && <p className="error">{this.state.error}</p>}

        {this.state.showTruthTable ? (
          <table className="truth-table">
            <thead>
              <tr>
                {Object.keys(this.state.trueRows[0] || {}).map((key, index) => (
                  <th key={index}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {this.state.trueRows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {Object.values(row).map((value, colIndex) => (
                    <td key={colIndex}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        ): (
          <ActiveClauseCoverage />
        )
      }

        {!this.state.showTruthTable && (
          <div>
            <h3>True</h3>
            <table className="truth-table">
              <thead>
                <tr>
                  {Object.keys(this.state.trueRows[0] || {}).map((key, index) => (
                    <th key={index}>{key}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {this.state.trueRows.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {Object.values(row).map((value, colIndex) => (
                      <td key={colIndex}>{value}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>

            <h3>False</h3>
            <table className="truth-table">
              <thead>
                <tr>
                  {Object.keys(this.state.falseRows[0] || {}).map((key, index) => (
                    <th key={index}>{key}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {this.state.falseRows.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {Object.values(row).map((value, colIndex) => (
                      <td key={colIndex}>{value}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
}

export default TruthTable;
*/
















// Not Working
/*
import React, { useState } from 'react';
import './TruthTable.css';
import ActiveClauseCoverage from './ActiveClauseCoverage.js'; 


const TruthTable = () => {
  const [predicate, setPredicate] = useState('');
  const [trueRows, setTrueRows] = useState([]);
  const [falseRows, setFalseRows] = useState([]);
  const [showTruthTable, setShowTruthTable] = useState(true);
  const [error, setError] = useState(null);
  const [clausePairs, setClausePairs] = useState([]);
  const [variables, setVariables] = useState([]);

  const handleChange = (event) => {
    const { value } = event.target;
    if (!value.trim()) {
      setPredicate(value);
      setError(null);
      setShowTruthTable(false);
    } else {
      const invalidChars = value.match(/[^a-zA-Z0-9()&|!^= ]|(?<![a-zA-Z0-9])[0-9]+(?![a-zA-Z0-9])/g);
      if (invalidChars) {
        const errorMessage = `Invalid character(s): ${invalidChars.join(', ')}`;
        setPredicate(value);
        setError(errorMessage);
      } else {
        setPredicate(value);
        setError(null);
      }
    }
  };

  const generateTruthTable = () => {
    const variables = extractVariables(predicate);
    const numVariables = variables.length;
    const numCombinations = Math.pow(2, numVariables);
    const trueRows = [];
    const falseRows = [];

    try {
      for (let i = 0; i < numCombinations; i++) {
        const row = {};
        for (let j = 0; j < numVariables; j++) {
          const variable = variables[j];
          row[variable] = (i >> j) & 1;
        }
        const result = evaluateExpression(predicate, row);
        row['Result'] = result ? 1 : 0;
        if (result) {
          trueRows.push(row);
        } else {
          falseRows.push(row);
        }
      }

      setTrueRows(trueRows);
      setFalseRows(falseRows);
      setShowTruthTable(true);
      setError(null);
      setVariables(variables);
    } catch (error) {
      setError(error.message);
    }
  };

  const handlePredicateCoverage = () => {
    generateTruthTable();
    setShowTruthTable(false);
  };

  const handleCombinatorialCoverage = () => {
    const rows = [];
    const variables = extractVariables(predicate);
    const numVariables = variables.length;
    const numCombinations = Math.pow(2, numVariables);

    try {
      for (let i = 0; i < numCombinations; i++) {
        const row = {};
        for (let j = 0; j < numVariables; j++) {
          const variable = variables[j];
          row[variable] = (i >> j) & 1;
        }
        const result = evaluateExpression(predicate, row);
        row['Result'] = result ? 1 : 0;
        rows.push(row);
      }

      setTrueRows(rows);
      setShowTruthTable(true);
      setError(null);
      setVariables(variables);
    } catch (error) {
      setError(error.message);
    }
  };

  // const handleActiveClauseCoverage = () => {
  //   // Call ActiveClauseCoverage logic here...
  //   setClausePairs(ActiveClauseCoverageLogic());
  // };

  const handleActiveClauseCoverage = () => {
    const clausePairs = ActiveClauseCoverageLogic();
    setClausePairs(clausePairs);

    const variables = extractVariables(predicate);
    const numRows = Math.pow(2, variables.length);
    const activeClauseRows = [];

    try {
      for (let i = 0; i < numRows; i++) {
        const row = {};
        for (let j = 0; j < variables.length; j++) {
          const variable = variables[j];
          row[variable] = (i >> j) & 1;
        }
        const result = evaluateActiveClauseCoverage(clausePairs, row);
        row['Result'] = result ? 1 : 0;
        activeClauseRows.push(row);
      }

      setTrueRows(activeClauseRows);
      setShowTruthTable(true);
      setError(null);
      setVariables(variables);
    } catch (error) {
      setError(error.message);
    }
  };

  const ActiveClauseCoverageLogic = () => {
    const variables = predicate.match(/[a-zA-Z]/g) || [];
    const numRows = Math.pow(2, variables.length);
    const clausePairs = [];

    for (let i = 0; i < variables.length; i++) {
      const variable = variables[i];
      const pairs = [];
      for (let j = 0; j < numRows; j++) {
        for (let k = j + 1; k < numRows; k++) {
          pairs.push([j, k]);
        }
      }
      clausePairs.push(pairs);
    }

    return clausePairs;
  };

  const extractVariables = (predicate) => {
    return [...new Set(predicate.match(/[a-zA-Z0-9]+/g))];
  };

  const evaluateExpression = (expression, row) => {
    const variables = extractVariables(expression);
    let replacedExpression = expression.replace(/[a-zA-Z0-9]+/g, match => row[match]);
    replacedExpression = replacedExpression.replace(/=/g, '===');

    try {
      const result = eval(replacedExpression);
      return !!result;
    } catch (error) {
      throw new Error('Error evaluating expression: ' + error.message);
    }
  };

  const evaluateActiveClauseCoverage = (clausePairs, row) => {
    let covered = true;
    clausePairs.forEach(pairList => {
      pairList.forEach(pair => {
        if (row[pair[0]] !== row[pair[1]]) {
          covered = false;
        }
      });
    });
    return covered;
  };

  return (
    <div className="truth-table-container">
      <h2>Enter Predicate:</h2>
      <input
        type="text"
        value={predicate}
        onChange={handleChange}
        placeholder="Enter predicate"
      />
      <button onClick={handlePredicateCoverage}>Predicate Coverage</button>
      <button onClick={handleCombinatorialCoverage}>Combinatorial Coverage</button>
      <button onClick={handleActiveClauseCoverage}>Active Clause Coverage</button>


      {error && <p className="error">{error}</p>}

      {showTruthTable && (
        <table className="truth-table">
          <thead>
            <tr>
              {Object.keys(trueRows[0] || {}).map((key, index) => (
                <th key={index}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {trueRows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {Object.values(row).map((value, colIndex) => (
                  <td key={colIndex}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}


      {clausePairs.length > 0 && (
        <div>
          <h3>Clause Pairs</h3>
          <ul>
            {clausePairs.map((pairList, index) => (
              <li key={index}>
                Variable {variables[index]}:
                <ul>
                  {pairList.map((pair, idx) => (
                    <li key={idx}>
                      ({pair[0] + 1}, {pair[1] + 1})
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      )}

      {!showTruthTable && (
        <div>
          <h3>True</h3>
          <table className="truth-table">
            <thead>
              <tr>
                {Object.keys(trueRows[0] || {}).map((key, index) => (
                  <th key={index}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {trueRows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {Object.values(row).map((value, colIndex) => (
                    <td key={colIndex}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          <h3>False</h3>
          <table className="truth-table">
            <thead>
              <tr>
                {Object.keys(falseRows[0] || {}).map((key, index) => (
                  <th key={index}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {falseRows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {Object.values(row).map((value, colIndex) => (
                    <td key={colIndex}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TruthTable;
*/







import React from 'react';
import './TruthTable.css';

class TruthTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      predicate: '',
      trueRows: [],
      falseRows: [],
      showTruthTable: true,
      error: null, // New state to hold error information
    };
    this.handleChange = this.handleChange.bind(this);
    this.generateTruthTable = this.generateTruthTable.bind(this);
    this.handlePredicateCoverage = this.handlePredicateCoverage.bind(this);
    this.handleCombinatorialCoverage = this.handleCombinatorialCoverage.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    if (!value.trim()) {
      this.setState({ predicate: value, error: null, showTruthTable: false });
    } else {
      const invalidChars = value.match(/[^a-zA-Z0-9()&|!^= ]|(?<![a-zA-Z0-9])[0-9]+(?![a-zA-Z0-9])/g);
      if (invalidChars) {
        const errorMessage = `Invalid character(s): ${invalidChars.join(', ')}`;
        this.setState({ predicate: value, error: errorMessage });
      } else {
        this.setState({ predicate: value, error: null });
      }
    }
  }

  generateTruthTable() {
    const { predicate } = this.state;
    const trueRows = [];
    const falseRows = [];

    // Generate all possible combinations of true/false for variables in the predicate
    const variables = this.extractVariables(predicate);
    const numVariables = variables.length;
    const numCombinations = Math.pow(2, numVariables);

    try {
      for (let i = 0; i < numCombinations; i++) {
        const row = {};
        for (let j = 0; j < numVariables; j++) {
          const variable = variables[j];
          row[variable] = (i >> j) & 1;
        }
        const result = this.evaluateExpression(predicate, row);
        row['Result'] = result ? 1 : 0;
        if (result) {
          trueRows.push(row);
        } else {
          falseRows.push(row);
        }
      }

      this.setState({ trueRows, falseRows, showTruthTable: true, error: null });
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  handlePredicateCoverage() {
    this.generateTruthTable();
    this.setState({ showTruthTable: false });
  }

  handleCombinatorialCoverage() {
    const { predicate } = this.state;
    const rows = [];

    // Generate all possible combinations of true/false for variables in the predicate
    const variables = this.extractVariables(predicate);
    const numVariables = variables.length;
    const numCombinations = Math.pow(2, numVariables);

    try {
      for (let i = 0; i < numCombinations; i++) {
        const row = {};
        for (let j = 0; j < numVariables; j++) {
          const variable = variables[j];
          row[variable] = (i >> j) & 1;
        }
        const result = this.evaluateExpression(predicate, row);
        row['Result'] = result ? 1 : 0;
        rows.push(row);
      }

      this.setState({ trueRows: rows, showTruthTable: true, error: null });
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  extractVariables(predicate) {
    return [...new Set(predicate.match(/[a-zA-Z0-9]+/g))];
  }

  evaluateExpression(expression, row) {
    const variables = this.extractVariables(expression);

    // Replace each variable in the expression with its value from the row
    let replacedExpression = expression.replace(/[a-zA-Z0-9]+/g, match => row[match]);

    // Replace equivalence operator (=) with logical AND operator (&&)
    replacedExpression = replacedExpression.replace(/=/g, '===');

    // Evaluate the expression
    try {
      const result = eval(replacedExpression);
      return !!result; // Convert result to boolean
    } catch (error) {
      throw new Error('Error evaluating expression: ' + error.message);
    }
  }

  
  render() {
    return (
      <div className="truth-table-container">
        <h2>Enter Predicate:</h2>
        <input
          type="text"
          value={this.state.predicate}
          onChange={this.handleChange}
          placeholder="Enter predicate"
        />
        <button onClick={this.handlePredicateCoverage}>Predicate Coverage</button>
        <button onClick={this.handleCombinatorialCoverage}>Combinatorial Coverage</button>

        {this.state.error && <p className="error">{this.state.error}</p>}

        {this.state.showTruthTable && (
          <table className="truth-table">
            <thead>
              <tr>
                {Object.keys(this.state.trueRows[0] || {}).map((key, index) => (
                  <th key={index}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {this.state.trueRows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {Object.values(row).map((value, colIndex) => (
                    <td key={colIndex}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {!this.state.showTruthTable && (
          <div>
            <h3>True</h3>
            <table className="truth-table">
              <thead>
                <tr>
                  {Object.keys(this.state.trueRows[0] || {}).map((key, index) => (
                    <th key={index}>{key}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {this.state.trueRows.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {Object.values(row).map((value, colIndex) => (
                      <td key={colIndex}>{value}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>

            <h3>False</h3>
            <table className="truth-table">
              <thead>
                <tr>
                  {Object.keys(this.state.falseRows[0] || {}).map((key, index) => (
                    <th key={index}>{key}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {this.state.falseRows.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {Object.values(row).map((value, colIndex) => (
                      <td key={colIndex}>{value}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
}

export default TruthTable;