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