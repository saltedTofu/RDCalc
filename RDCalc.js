//Variables to calculate IBW and function for calculating IBW/%IBW
let heightInInches;
let IBW;
let percentIBW;
function calcIdealWeight(inchInput,feetInput,male,female,ABW)
{
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
    let lowKcal;
    lowKcal=(document.getElementById('lowEndKcal').value * document.getElementById('BWkg').value);
    document.getElementById('range1').innerHTML = lowKcal;

}
function calcKcal2()
{
    let highKcal;
    highKcal=(document.getElementById('highEndKcal').value * document.getElementById('BWkg').value);
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
    let lowPro;
    lowPro=Math.round((document.getElementById('lowEndPro').value * document.getElementById('BWkg').value));
    document.getElementById('range3').innerHTML = lowPro;

}
function calcPro2()
{
    let highPro;
    highPro=Math.round((document.getElementById('highEndPro').value * document.getElementById('BWkg').value));
    document.getElementById('range4').innerHTML = highPro;

}
//function to change nav color
function navChangeColor(element)
{
    element.style.fontWeight= 'bold';
}
function navChangeBack(element)
{
    element.style.fontWeight = 'normal';
}