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