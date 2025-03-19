async function getVariableValue(variableName) {
  const collections = await figma.variables.getLocalVariableCollectionsAsync();
  const allVariables = await figma.variables.getLocalVariablesAsync();

  for (const collection of collections) {
    const variables = allVariables.filter(v => v.variableCollectionId === collection.id);
    const variable = variables.find(v => v.name === variableName);
    if (variable) {
      const modes = collection.modes;
      const defaultMode = modes.find(mode => mode.modeId === collection.defaultModeId);
      const value = variable.valuesByMode[defaultMode.modeId];
      
      console.log(`Variable: ${variableName}`);
      
      if (value && typeof value === 'object' && value.type === 'VARIABLE_ALIAS') {
        const referencedVariable = allVariables.find(v => v.id === value.id);
        console.log(`Referenced Variable: ${referencedVariable.name}`);
        return referencedVariable.name;
      } else {
        console.log(`Raw Value:`, value);
        return value;
      }
    }
  }
  console.log(`Variable "${variableName}" not found.`);
  return null;
}

// Example usage:
// getVariableValue("Global/Color/Doc/Typography/Default")
