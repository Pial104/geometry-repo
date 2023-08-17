function calculateTriangleArea(){
    // get triangle base value
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value ;
    const base = parseFloat(baseValueText);
    baseField.value = '' ;
 

    // get triangle height value
    const heightField = document.getElementById('triangle-height');
    const heightValueText = heightField.value ;
    const height = parseFloat(heightValueText);
    heightField.value = '' ;
    

    // formula
    const area = 0.5 * base * height ;


    // show triangle area
    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;

}


// Reactangle calculation
function calculateReactangleArea(){
    // get reactangle width value
    const widthField = document.getElementById('rectangle-width');
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);
    widthField.value = '' ;

    const lengthField = document.getElementById('rectangle-length');
    const lengthValueText = lengthField.value ;
    const length = parseFloat(lengthValueText);
    lengthField.value = '' ;



    // formula
    const reactangleArea = width * length ;

    // show reactangle area
    const reactangleAreaSpan = document.getElementById('reactangle-area');
    reactangleAreaSpan.innerText = reactangleArea ;
}


// parallelogram
function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height')
    // Area
    const area = base * height ;
    setElementInnerText('parallelogram-area',area)

}

// Ellipse
function calculateEllipseArea(){
    const firstRadius = getInputValue('ellipse-first-radius');
    const SecondRadius = getInputValue('ellipse-second-radius');

    // Area 
    const area = 3.14 * firstRadius * SecondRadius;
    setElementInnerText('ellipse-area',area);


}


// Reusable Function 
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value ;
    
}

// Reusable set Span,p , div, text etc
function setElementInnerText(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}