//Functions for calculating IBW/%IBW

function calcIdealWeight(inchInput,feetInput,male,female,ABW,unit)
{
    let heightInInches;
    let IBW;
    let percentIBW;
    let selectedUnit;
    let inches = parseFloat(inchInput,10);
    let feet = parseFloat(feetInput,10);
    if(isNaN(inches))
    {
        inches=0;
    }
    if(isNaN(feet))
    {
        document.getElementById('solution').innerHTML='Enter a height';
        return;
    }
    if(male.checked)
    {
        heightInInches=(feet*12)+inches;
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
        heightInInches=(feet*12)+inches;
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
        document.getElementById('solution').innerHTML=Math.round(IBW) + 'lbs or ' + Math.round(IBW/2.2) + 'kg' + ' +/- 10%';
    } 
    selectedUnit = unit.options[unit.selectedIndex].value;
    if(selectedUnit =='lbs')
    {
        ABW=parseFloat(ABW,10)/2.2;
    }
    percentIBW = Math.round(((parseFloat(ABW,10))/(IBW/2.2)*100));
    if(isNaN(percentIBW))
    {
        document.getElementById('solution2').innerHTML='Enter Actual Body Weight';
        return;
    }
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
//Functions to calculate kcal ranges
function calcKcal1()
{
    let unit = document.getElementById('lbsOrKg2');
    let selectedUnit = unit.options[unit.selectedIndex].value;
    let ABW = document.getElementById('BWkg').value;
    ABW=parseInt(ABW,10);
    if(isNaN(ABW))
    {
        document.getElementById('kcalDash').innerHTML = 'Enter a Body Weight';
        document.getElementById('kcalPerDay').style.display = 'none';
        return;
    }
    else
    {
        document.getElementById('kcalDash').innerHTML = ' - ';
        document.getElementById('kcalPerDay').style.display = 'inline';   
    }
    if(selectedUnit =='lbs')
    {
        ABW=ABW/2.2;
        
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
    ABW=parseInt(ABW,10);
    if(isNaN(ABW))
    {
        document.getElementById('kcalDash').innerHTML = 'Enter a Body Weight';
        document.getElementById('kcalPerDay').style.display = 'none';
        return;
    }
    else
    {
        document.getElementById('kcalDash').innerHTML = ' - ';
        document.getElementById('kcalPerDay').style.display = 'inline';   
    }
    if(selectedUnit =='lbs')
    {
        ABW=ABW/2.2;
        
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
//Functions to calculate Protein ranges
function calcPro1()
{
    let unit = document.getElementById('lbsOrKg2');
    let selectedUnit = unit.options[unit.selectedIndex].value;
    let ABW = document.getElementById('BWkg').value;
    ABW=parseInt(ABW,10);
    if(isNaN(ABW))
    {
        document.getElementById('proteinDash').innerHTML = 'Enter a Body Weight';
        document.getElementById('gramsPerDay').style.display = 'none';
        return;
    }
    else
    {
        document.getElementById('proteinDash').innerHTML = ' - ';
        document.getElementById('gramsPerDay').style.display = 'inline';   
    }
    if(selectedUnit =='lbs')
    {
        ABW=ABW/2.2;
        
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
    ABW=parseInt(ABW,10);
    if(isNaN(ABW))
    {
        document.getElementById('proteinDash').innerHTML = 'Enter a Body Weight';
        document.getElementById('gramsPerDay').style.display = 'none';
        return;
    }
    else
    {
        document.getElementById('proteinDash').innerHTML = ' - ';
        document.getElementById('gramsPerDay').style.display = 'inline';   
    }
    if(selectedUnit =='lbs')
    {
        ABW=ABW/2.2;
        
    }
    let highPro;
    highPro=Math.round((document.getElementById('highEndPro').value * ABW));
    document.getElementById('range4').innerHTML = highPro;

}
//function to change nav color when hovered over
function navChangeColor(element)
{
    element.style.textShadow= '0px 0px 1px black';
}
function navChangeBack(element)
{
    element.style.textShadow= '0px 0px 0px black';
}
//Class and function for calculating tube feeds
class tubeFeed{
    constructor(kcal,protein,water){
      this._kcal=kcal;
      this._protein=protein;
      this._water=water;
    }
    get kcal(){
        return this._kcal;
    }
    get protein(){
        return this._protein;
    }
    get water(){
        return this._water;
    }
}
let FibersourceHN = new tubeFeed(1200,54,810);
let Isosource15 = new tubeFeed(1500,68,760);
let Nutren20 = new tubeFeed(2000,84,690);
let Replete = new tubeFeed(1000,64,840);
let DiabetisourceAC = new tubeFeed (1200,60,820);
let NovasourceRenal = new tubeFeed (2000,90.7,720);
let PeptamenAF12 = new tubeFeed(1200,76,810);
let PeptamenIntenseVHP = new tubeFeed(1000,92,840);
let VivonexRTF = new tubeFeed(1000,50,850);

let kcal;
let protein;
let water;
let TFformula;
function calcTF(totalVolume)
{
    if(TFformula =='Isosource15')
    {
        kcal = Math.round(totalVolume*(Isosource15.kcal/1000));
        protein = Math.round(totalVolume*(Isosource15.protein/1000));
        water = Math.round(totalVolume*(Isosource15.water/1000));
    }
    if(TFformula =='PeptamenAF12')
    {
        kcal = Math.round(totalVolume*(PeptamenAF12.kcal/1000));
        protein = Math.round(totalVolume*(PeptamenAF12.protein/1000));
        water = Math.round(totalVolume*(PeptamenAF12.water/1000));
    }
    if(TFformula =='FibersourceHN')
    {
        kcal = Math.round(totalVolume*(FibersourceHN.kcal/1000));
        protein = Math.round(totalVolume*(FibersourceHN.protein/1000));
        water = Math.round(totalVolume*(FibersourceHN.water/1000));
    }
    if(TFformula =='Nutren20')
    {
        kcal = Math.round(totalVolume*(Nutren20.kcal/1000));
        protein = Math.round(totalVolume*(Nutren20.protein/1000));
        water = Math.round(totalVolume*(Nutren20.water/1000));
    }
    if(TFformula =='Replete')
    {
        kcal = Math.round(totalVolume*(Replete.kcal/1000));
        protein = Math.round(totalVolume*(Replete.protein/1000));
        water = Math.round(totalVolume*(Replete.water/1000));
    }
    if(TFformula =='DiabetisourceAC')
    {
        kcal = Math.round(totalVolume*(DiabetisourceAC.kcal/1000));
        protein = Math.round(totalVolume*(DiabetisourceAC.protein/1000));
        water = Math.round(totalVolume*(DiabetisourceAC.water/1000));
    }
    if(TFformula =='NovasourceRenal')
    {
        kcal = Math.round(totalVolume*(NovasourceRenal.kcal/1000));
        protein = Math.round(totalVolume*(NovasourceRenal.protein/1000));
        water = Math.round(totalVolume*(NovasourceRenal.water/1000));
    }
    if(TFformula =='PeptamenIntenseVHP')
    {
        kcal = Math.round(totalVolume*(PeptamenIntenseVHP.kcal/1000));
        protein = Math.round(totalVolume*(PeptamenIntenseVHP.protein/1000));
        water = Math.round(totalVolume*(PeptamenIntenseVHP.water/1000));
    }
    if(TFformula =='VivonexRTF')
    {
        kcal = Math.round(totalVolume*(VivonexRTF.kcal/1000));
        protein = Math.round(totalVolume*(VivonexRTF.protein/1000));
        water = Math.round(totalVolume*(VivonexRTF.water/1000));
    }
}
function calcContinuous(formula,rate,hoursPerDay)
{
    TFformula=formula;
    let totalVolume = rate * hoursPerDay;
    calcTF(totalVolume);
    document.getElementById('tfKcal').innerHTML = kcal;
    document.getElementById('tfProtein').innerHTML = protein;
    document.getElementById('tfWater').innerHTML = water;
}
function calcBolus(formula,volume,bolusPerDay)
{
    TFformula=formula;
    let totalVolume = volume * bolusPerDay;
    calcTF(totalVolume);
    document.getElementById('bolusKcal').innerHTML = kcal;
    document.getElementById('bolusProtein').innerHTML = protein;
    document.getElementById('bolusWater').innerHTML = water;
}
function showVolume(val)
{
    document.getElementById('bolusVolumeOutput').innerHTML=val;
}
function showRate(val)
{
    document.getElementById('rateOutput').innerHTML=val;
}
//function to calculate TPN/PPN named by Shirley
function steezy(dextroseConcentration, aminoAcidConcentration, pnRate, hoursPerDay)
{
    let totalVolume = pnRate*hoursPerDay;
    let gramsDextrose = (dextroseConcentration/100)*totalVolume;
    let gramsAminoAcid = (aminoAcidConcentration/100)*totalVolume;
    document.getElementById('pnKcal').innerHTML = Math.round((gramsDextrose*3.4) + (gramsAminoAcid*4));
    document.getElementById('pnProtein').innerHTML = Math.round(gramsAminoAcid);
    document.getElementById('pnTotalVolume').innerHTML = Math.round(totalVolume);
}
function showPnRate(val)
{
    document.getElementById('pnRateOutput').innerHTML=val;
}
function girCalc(dextroseConcentration,hoursPerDay,weight,pnRate,unit)
{
    let selectedUnit = unit.options[unit.selectedIndex].value;
    weight = parseFloat(weight,10);
    if(isNaN(weight))
    {
        document.getElementById('gir').innerHTML = 'Enter Current Body Weight';
        return;
    }
    if(selectedUnit =='lbs')
    {
        weight=weight/2.2;
    }
    let totalVolume = pnRate * hoursPerDay;
    let gir = (pnRate*dextroseConcentration*1000)/(weight*60*100);
    document.getElementById('gir').innerHTML = Math.round(gir*10)/10;
}
