// script prints all variables that reference a named variable, the target variable.

async function getVariablesReferencing(targetVarName) {
  const collections = await figma.variables.getLocalVariableCollectionsAsync();
  const allVariables = await figma.variables.getLocalVariablesAsync();
  
  // Find the target variable
  const targetVar = allVariables.find(v => v.name === targetVarName);
  if (!targetVar) {
    console.log(`Variable "${targetVarName}" not found.`);
    return [];
  }

  const results = [];

  // Check all variables for references
  for (const variable of allVariables) {
    const collection = collections.find(c => c.id === variable.variableCollectionId);
    const modes = collection?.modes || [];
    
    const referencingModes = [];
    
    for (const mode of modes) {
      const value = variable.valuesByMode[mode.modeId];
      if (value?.type === 'VARIABLE_ALIAS' && value.id === targetVar.id) {
        referencingModes.push(mode.name);
      }
    }

    if (referencingModes.length > 0) {
      results.push({
        variable: variable.name,
        modes: referencingModes,
        variableId: variable.id
      });
    }
  }

  if (results.length > 0) {
    console.log(`Variables referencing "${targetVarName}":`);
    results.forEach(r => {
      console.log(`- ${r.variable} (Modes: ${r.modes.join(', ')})`);
    });
  } else {
    console.log(`No variables reference "${targetVarName}"`);
  }
  
  return results;
}

// Usage example:
getVariablesReferencing("Sys/Color/Foreground/Neutral/800")