import React from 'react';


class Mergecodeactive extends React.Component {
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
export default Mergecodeactive;  