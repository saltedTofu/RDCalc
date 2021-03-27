//Functions for calculating IBW/%IBW

function calcIdealWeight(inchInput,feetInput,male,female,ABW,unit)
{
    let heightInInches;
    let IBW;
    let percentIBW;
    let selectedUnit;
    if(male.checked)
    {
        heightInInches=(parseInt(feetInput,10)*12)+parseInt(inchInput,10);
        if(heightInInches<60)
        {
            IBW = 106-2*(60-heightInInches);
        }
        else
        {
            IBW = (heightInInches-60)*6+106;
        }
    }
    else if(female.checked)
    {
        heightInInches=(parseInt(feetInput,10)*12)+parseInt(inchInput,10);
        if(heightInInches<60)
        {
            IBW = 100-2*(60-heightInInches);
        }
        else
        {
            IBW = (heightInInches-60)*5+100;
        }
    }
    else
    {
        IBW = 'Select a gender';
        document.getElementById('solution').innerHTML=IBW;
    }
    if(female.checked || male.checked)
    {
        document.getElementById('solution').innerHTML=IBW + 'lbs or ' + Math.round(IBW/2.2) + 'kg' + ' +/- 10%';
    } 
    selectedUnit = unit.options[unit.selectedIndex].value;
    if(selectedUnit =='lbs')
    {
        ABW=parseInt(ABW,10)/2.2;
    }
    percentIBW = Math.round(((parseInt(ABW,10))/(IBW/2.2)*100));
    document.getElementById('solution2').innerHTML=percentIBW + "%";  
}
//Function to show Kcal/Kg range values
function showRange(val)
{
    document.getElementById('textInputLow').innerHTML=val;
}
function showRange2(val)
{
    document.getElementById('textInputHigh').innerHTML=val;
}
//Function calculate kcal range
function calcKcal1()
{
    let unit = document.getElementById('lbsOrKg2');
    let selectedUnit = unit.options[unit.selectedIndex].value;
    let ABW = document.getElementById('BWkg').value;
    if(selectedUnit =='lbs')
    {
        ABW=parseInt(ABW,10)/2.2;
        
    }
    let lowKcal;
    lowKcal=Math.round((document.getElementById('lowEndKcal').value * ABW));
    document.getElementById('range1').innerHTML = lowKcal;
}
function calcKcal2()
{
    let unit = document.getElementById('lbsOrKg2');
    let selectedUnit = unit.options[unit.selectedIndex].value;
    let ABW = document.getElementById('BWkg').value;
    if(selectedUnit =='lbs')
    {
        ABW=parseInt(ABW,10)/2.2;
        
    }
    let highKcal;
    highKcal=Math.round((document.getElementById('highEndKcal').value * ABW));
    document.getElementById('range2').innerHTML = highKcal;
}
//Function to show protein g/kg range values
function showRangeP(val)
{
    document.getElementById('proInputLow').innerHTML=val;
}
function showRangeP2(val)
{
    document.getElementById('proInputHigh').innerHTML=val;
}
//Function calculate Protein range
function calcPro1()
{
    let unit = document.getElementById('lbsOrKg2');
    let selectedUnit = unit.options[unit.selectedIndex].value;
    let ABW = document.getElementById('BWkg').value;
    if(selectedUnit =='lbs')
    {
        ABW=parseInt(ABW,10)/2.2;
        
    }
    let lowPro;
    lowPro=Math.round((document.getElementById('lowEndPro').value * ABW));
    document.getElementById('range3').innerHTML = lowPro;

}
function calcPro2()
{
    let unit = document.getElementById('lbsOrKg2');
    let selectedUnit = unit.options[unit.selectedIndex].value;
    let ABW = document.getElementById('BWkg').value;
    if(selectedUnit =='lbs')
    {
        ABW=parseInt(ABW,10)/2.2;
        
    }
    let highPro;
    highPro=Math.round((document.getElementById('highEndPro').value * ABW));
    document.getElementById('range4').innerHTML = highPro;

}
//function to change nav color
function navChangeColor(element)
{
    element.style.textShadow= '0px 0px 1px black';
}
function navChangeBack(element)
{
    element.style.textShadow= '0px 0px 0px black';
}
