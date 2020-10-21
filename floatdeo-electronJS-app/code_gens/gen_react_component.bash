#!/bin/bash

# Script welcome
echo "Entering react component generator"
echo "Current working directory: $PWD"

# Set up input information
read -p $'Please provide the class name of the component:\x0a' gen_react_component_name
read -p $'Please provide a description of the component:\x0a' gen_react_component_description

gen_react_component_file_path="${gen_react_component_name}.js"
if [[ -f "./$gen_react_component_file_path" ]]
then 
# File already exists, so exit generator
echo "File $gen_react_component_file_path already exists"
else 
# Initiate file
touch "$gen_react_component_file_path" 

# Generate file description comment
echo "Starting generation of $gen_react_component_name"
echo "/** 
* ${gen_react_component_file_path}
*" >> $gen_react_component_file_path 

while [[ ! ${#gen_react_component_description} = 0 ]]
do
echo "* ${gen_react_component_description:0:60}" >> $gen_react_component_file_path
gen_react_component_description=${gen_react_component_description:40}
done

echo '* 
*/
' >> $gen_react_component_file_path 

# Generate import comments
echo '// Modules' >> $gen_react_component_file_path
echo "import React from 'react';" >> $gen_react_component_file_path
echo >> $gen_react_component_file_path
echo '// Locals' >> $gen_react_component_file_path
echo >> $gen_react_component_file_path

# Generate component javascript declaration
echo "export default class $gen_react_component_name extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<div>Hello react</div>);
    }
}" >> $gen_react_component_file_path

fi #End conditional

echo '...Exiting react component generator'