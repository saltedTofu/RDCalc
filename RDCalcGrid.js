//global variables
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
let Glucerna10 = new tubeFeed(1000,41.8,853);
let Glucerna12 = new tubeFeed(1200,60,805);
let Glucerna15 = new tubeFeed(1500,82.5,759);
let Jevity10 = new tubeFeed(1060,44.3,835);
let Jevity12 = new tubeFeed(1200,55.5,807);
let Jevity15 = new tubeFeed(1500,63.8,760);
let Nepro = new tubeFeed(1770,81,727);
let Osmolite10 = new tubeFeed(1060,44.3,835);
let Osmolite12 = new tubeFeed(1200,55.5,820);
let Osmolite15 = new tubeFeed(1500,62.7,762);
let Pivot15 = new tubeFeed(1500,93.8,750);
let Promote = new tubeFeed(1000,62.5,839);
let PromoteWithFiber = new tubeFeed(1000,62.5,831);
let Pulmocare = new tubeFeed(1500,62.6,785);
let Suplena = new tubeFeed(1800,44.7,725.7);
let TwoCalHN = new tubeFeed(2000,83.5,700);
let Vital10 = new tubeFeed(1000,40,834);
let VitalAF12 = new tubeFeed(1200,75,811);
let Vital15 = new tubeFeed(1500,67.5,764);
let VitalHighProtein = new tubeFeed(1000,87.3,836);
let Compleat = new tubeFeed(1060,48,828);
let Glytrol = new tubeFeed(1000,45.2,840);
let Impact = new tubeFeed(1000,56,852);
let ImpactPeptide15 = new tubeFeed(1500,94,770);
let IsosourceHN = new tubeFeed(1200,54,808);
let Nutren10 = new tubeFeed(1000,40,844);
let Nutren10WithFiber = new tubeFeed(1000,40,848);
let Nutren15 = new tubeFeed(1500,68,764);
let Peptamen = new tubeFeed(1000,40,848);
let Peptamen15 = new tubeFeed(1500,68,772);
let Renalcal = new tubeFeed(1000,34,704);
let Replete = new tubeFeed(1000,64,840);
let Isosource15 = new tubeFeed(1500,68,760);
let Nutren20 = new tubeFeed(2000,84,690);
let DiabetisourceAC = new tubeFeed (1200,60,820);
let NovasourceRenal = new tubeFeed (2000,90.7,720);
let PeptamenAF12 = new tubeFeed(1200,76,810);
let PeptamenIntenseVHP = new tubeFeed(1000,92,840);
let VivonexRTF = new tubeFeed(1000,50,850);
let KateFarmsStandard10 = new tubeFeed(1000,49.2,800);
let KateFarmsStandard14 = new tubeFeed(1400,61.5,720);
let KateFarmsPeptide10 = new tubeFeed(1000,49.2,790);
let KateFarmsPeptide15 = new tubeFeed(1538,73.8,700);
let kcal;
let protein;
let water;
let TFformula;
let modular=null;
let modularFrequency=null;
let flushVolume=null;
let flushAmount=null;
//Functions for calculating IBW/%IBW
function calcIdealWeight(inchInput,feetInput,male,female,ABW,unit,LBKA,RBKA,LAKA,RAKA,para,quad)
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
        document.getElementById('BMIOutput').innerHTML='Enter a height';
        return;
    }
    heightInInches=(feet*12)+inches;
    if(male.checked)
    {
        
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
        return;
    }
    let otherFactors=0;
    if(LBKA.checked)
    {
        otherFactors += .059;
    }
    if(RBKA.checked)
    {
        otherFactors += .059;
    }
    if(LAKA.checked)
    {
        otherFactors += .16;
    }
    if(RAKA.checked)
    {
        otherFactors += .16;
    }
    if(para.checked)
    {
        otherFactors += .125;
    }
    if(quad.checked)
    {
        otherFactors += .175;
    }
    if(LBKA.checked || RBKA.checked || LAKA.checked || RAKA.checked || para.checked || quad.checked)
    {
        IBW = IBW*(1-otherFactors);
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
    let meterHeight = (heightInInches*2.54)/100;
    let BMI = (Math.round(ABW/(meterHeight*meterHeight)*10)/10);
    if(isNaN(percentIBW))
    {
        document.getElementById('solution2').innerHTML='Enter Actual Body Weight';
        document.getElementById('BMIOutput').innerHTML = 'Enter Actual Body Weight';  
        return;
    }
    if(isNaN(BMI))
    {
        document.getElementById('BMIOutput').innerHTML = "Enter Actual Body Weight";
    }
    document.getElementById('BMIOutput').innerHTML = BMI;  
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

function calcTF(totalVolume)
{
    if(TFformula =='KateFarmsPeptide15')
    {
        kcal = Math.round(totalVolume*(KateFarmsPeptide15.kcal/1000));
        protein = Math.round(totalVolume*(KateFarmsPeptide15.protein/1000));
        water = Math.round(totalVolume*(KateFarmsPeptide15.water/1000));
    }
    else if(TFformula =='KateFarmsPeptide10')
    {
        kcal = Math.round(totalVolume*(KateFarmsPeptide10.kcal/1000));
        protein = Math.round(totalVolume*(KateFarmsPeptide10.protein/1000));
        water = Math.round(totalVolume*(KateFarmsPeptide10.water/1000));
    }
    else if(TFformula =='KateFarmsStandard14')
    {
        kcal = Math.round(totalVolume*(KateFarmsStandard14.kcal/1000));
        protein = Math.round(totalVolume*(KateFarmsStandard14.protein/1000));
        water = Math.round(totalVolume*(KateFarmsStandard14.water/1000));
    }
    else if(TFformula =='KateFarmsStandard10')
    {
        kcal = Math.round(totalVolume*(KateFarmsStandard10.kcal/1000));
        protein = Math.round(totalVolume*(KateFarmsStandard10.protein/1000));
        water = Math.round(totalVolume*(KateFarmsStandard10.water/1000));
    }
    else if(TFformula =='Isosource15')
    {
        kcal = Math.round(totalVolume*(Isosource15.kcal/1000));
        protein = Math.round(totalVolume*(Isosource15.protein/1000));
        water = Math.round(totalVolume*(Isosource15.water/1000));
    }
    else if(TFformula =='PeptamenAF12')
    {
        kcal = Math.round(totalVolume*(PeptamenAF12.kcal/1000));
        protein = Math.round(totalVolume*(PeptamenAF12.protein/1000));
        water = Math.round(totalVolume*(PeptamenAF12.water/1000));
    }
    else if(TFformula =='FibersourceHN')
    {
        kcal = Math.round(totalVolume*(FibersourceHN.kcal/1000));
        protein = Math.round(totalVolume*(FibersourceHN.protein/1000));
        water = Math.round(totalVolume*(FibersourceHN.water/1000));
    }
    else if(TFformula =='Nutren20')
    {
        kcal = Math.round(totalVolume*(Nutren20.kcal/1000));
        protein = Math.round(totalVolume*(Nutren20.protein/1000));
        water = Math.round(totalVolume*(Nutren20.water/1000));
    }
    else if(TFformula =='Replete')
    {
        kcal = Math.round(totalVolume*(Replete.kcal/1000));
        protein = Math.round(totalVolume*(Replete.protein/1000));
        water = Math.round(totalVolume*(Replete.water/1000));
    }
    else if(TFformula =='DiabetisourceAC')
    {
        kcal = Math.round(totalVolume*(DiabetisourceAC.kcal/1000));
        protein = Math.round(totalVolume*(DiabetisourceAC.protein/1000));
        water = Math.round(totalVolume*(DiabetisourceAC.water/1000));
    }
    else if(TFformula =='NovasourceRenal')
    {
        kcal = Math.round(totalVolume*(NovasourceRenal.kcal/1000));
        protein = Math.round(totalVolume*(NovasourceRenal.protein/1000));
        water = Math.round(totalVolume*(NovasourceRenal.water/1000));
    }
    else if(TFformula =='PeptamenIntenseVHP')
    {
        kcal = Math.round(totalVolume*(PeptamenIntenseVHP.kcal/1000));
        protein = Math.round(totalVolume*(PeptamenIntenseVHP.protein/1000));
        water = Math.round(totalVolume*(PeptamenIntenseVHP.water/1000));
    }
    else if(TFformula =='VivonexRTF')
    {
        kcal = Math.round(totalVolume*(VivonexRTF.kcal/1000));
        protein = Math.round(totalVolume*(VivonexRTF.protein/1000));
        water = Math.round(totalVolume*(VivonexRTF.water/1000));
    }
    else if(TFformula =='Glucerna10')
    {
        kcal = Math.round(totalVolume*(Glucerna10.kcal/1000));
        protein = Math.round(totalVolume*(Glucerna10.protein/1000));
        water = Math.round(totalVolume*(Glucerna10.water/1000));
    }
    else if(TFformula =='Glucerna12')
    {
        kcal = Math.round(totalVolume*(Glucerna12.kcal/1000));
        protein = Math.round(totalVolume*(Glucerna12.protein/1000));
        water = Math.round(totalVolume*(Glucerna12.water/1000));
    }
    else if(TFformula =='Glucerna15')
    {
        kcal = Math.round(totalVolume*(Glucerna15.kcal/1000));
        protein = Math.round(totalVolume*(Glucerna15.protein/1000));
        water = Math.round(totalVolume*(Glucerna15.water/1000));
    }
    else if(TFformula =='Jevity10')
    {
        kcal = Math.round(totalVolume*(Jevity10.kcal/1000));
        protein = Math.round(totalVolume*(Jevity10.protein/1000));
        water = Math.round(totalVolume*(Jevity10.water/1000));
    }
    else if(TFformula =='Jevity12')
    {
        kcal = Math.round(totalVolume*(Jevity12.kcal/1000));
        protein = Math.round(totalVolume*(Jevity12.protein/1000));
        water = Math.round(totalVolume*(Jevity12.water/1000));
    }
    else if(TFformula =='Jevity15')
    {
        kcal = Math.round(totalVolume*(Jevity15.kcal/1000));
        protein = Math.round(totalVolume*(Jevity15.protein/1000));
        water = Math.round(totalVolume*(Jevity15.water/1000));
    }
    else if(TFformula =='Nepro')
    {
        kcal = Math.round(totalVolume*(Nepro.kcal/1000));
        protein = Math.round(totalVolume*(Nepro.protein/1000));
        water = Math.round(totalVolume*(Nepro.water/1000));
    }
    else if(TFformula =='Osmolite10')
    {
        kcal = Math.round(totalVolume*(Osmolite10.kcal/1000));
        protein = Math.round(totalVolume*(Osmolite10.protein/1000));
        water = Math.round(totalVolume*(Osmolite10.water/1000));
    }
    else if(TFformula =='Osmolite12')
    {
        kcal = Math.round(totalVolume*(Osmolite12.kcal/1000));
        protein = Math.round(totalVolume*(Osmolite12.protein/1000));
        water = Math.round(totalVolume*(Osmolite12.water/1000));
    }
    else if(TFformula =='Osmolite15')
    {
        kcal = Math.round(totalVolume*(Osmolite15.kcal/1000));
        protein = Math.round(totalVolume*(Osmolite15.protein/1000));
        water = Math.round(totalVolume*(Osmolite15.water/1000));
    }
    else if(TFformula =='Pivot15')
    {
        kcal = Math.round(totalVolume*(Pivot15.kcal/1000));
        protein = Math.round(totalVolume*(Pivot15.protein/1000));
        water = Math.round(totalVolume*(Pivot15.water/1000));
    }
    else if(TFformula =='Promote')
    {
        kcal = Math.round(totalVolume*(Promote.kcal/1000));
        protein = Math.round(totalVolume*(Promote.protein/1000));
        water = Math.round(totalVolume*(Promote.water/1000));
    }
    else if(TFformula =='PromoteWithFiber')
    {
        kcal = Math.round(totalVolume*(PromoteWithFiber.kcal/1000));
        protein = Math.round(totalVolume*(PromoteWithFiber.protein/1000));
        water = Math.round(totalVolume*(PromoteWithFiber.water/1000));
    }
    else if(TFformula =='Pulmocare')
    {
        kcal = Math.round(totalVolume*(Pulmocare.kcal/1000));
        protein = Math.round(totalVolume*(Pulmocare.protein/1000));
        water = Math.round(totalVolume*(Pulmocare.water/1000));
    }
    else if(TFformula =='Suplena')
    {
        kcal = Math.round(totalVolume*(Suplena.kcal/1000));
        protein = Math.round(totalVolume*(Suplena.protein/1000));
        water = Math.round(totalVolume*(Suplena.water/1000));
    }
    else if(TFformula =='TwoCalHN')
    {
        kcal = Math.round(totalVolume*(TwoCalHN.kcal/1000));
        protein = Math.round(totalVolume*(TwoCalHN.protein/1000));
        water = Math.round(totalVolume*(TwoCalHN.water/1000));
    }
    else if(TFformula =='Vital10')
    {
        kcal = Math.round(totalVolume*(Vital10.kcal/1000));
        protein = Math.round(totalVolume*(Vital10.protein/1000));
        water = Math.round(totalVolume*(Vital10.water/1000));
    }
    else if(TFformula =='VitalAF12')
    {
        kcal = Math.round(totalVolume*(VitalAF12.kcal/1000));
        protein = Math.round(totalVolume*(VitalAF12.protein/1000));
        water = Math.round(totalVolume*(VitalAF12.water/1000));
    }
    else if(TFformula =='Vital15')
    {
        kcal = Math.round(totalVolume*(Vital15.kcal/1000));
        protein = Math.round(totalVolume*(Vital15.protein/1000));
        water = Math.round(totalVolume*(Vital15.water/1000));
    }
    else if(TFformula =='VitalHighProtein')
    {
        kcal = Math.round(totalVolume*(VitalHighProtein.kcal/1000));
        protein = Math.round(totalVolume*(VitalHighProtein.protein/1000));
        water = Math.round(totalVolume*(VitalHighProtein.water/1000));
    }
    else if(TFformula =='Compleat')
    {
        kcal = Math.round(totalVolume*(Compleat.kcal/1000));
        protein = Math.round(totalVolume*(Compleat.protein/1000));
        water = Math.round(totalVolume*(Compleat.water/1000));
    }
    else if(TFformula =='Glytrol')
    {
        kcal = Math.round(totalVolume*(Glytrol.kcal/1000));
        protein = Math.round(totalVolume*(Glytrol.protein/1000));
        water = Math.round(totalVolume*(Glytrol.water/1000));
    }
    else if(TFformula =='Impact')
    {
        kcal = Math.round(totalVolume*(Impact.kcal/1000));
        protein = Math.round(totalVolume*(Impact.protein/1000));
        water = Math.round(totalVolume*(Impact.water/1000));
    }
    else if(TFformula =='ImpactPeptide15')
    {
        kcal = Math.round(totalVolume*(ImpactPeptide15.kcal/1000));
        protein = Math.round(totalVolume*(ImpactPeptide15.protein/1000));
        water = Math.round(totalVolume*(ImpactPeptide15.water/1000));
    }
    else if(TFformula =='IsosourceHN')
    {
        kcal = Math.round(totalVolume*(IsosourceHN.kcal/1000));
        protein = Math.round(totalVolume*(IsosourceHN.protein/1000));
        water = Math.round(totalVolume*(IsosourceHN.water/1000));
    }
    else if(TFformula =='Nutren10')
    {
        kcal = Math.round(totalVolume*(Nutren10.kcal/1000));
        protein = Math.round(totalVolume*(Nutren10.protein/1000));
        water = Math.round(totalVolume*(Nutren10.water/1000));
    }
    else if(TFformula =='Nutren10WithFiber')
    {
        kcal = Math.round(totalVolume*(Nutren10WithFiber.kcal/1000));
        protein = Math.round(totalVolume*(Nutren10WithFiber.protein/1000));
        water = Math.round(totalVolume*(Nutren10WithFiber.water/1000));
    }
    else if(TFformula =='Nutren15')
    {
        kcal = Math.round(totalVolume*(Nutren15.kcal/1000));
        protein = Math.round(totalVolume*(Nutren15.protein/1000));
        water = Math.round(totalVolume*(Nutren15.water/1000));
    }
    else if(TFformula =='Peptamen')
    {
        kcal = Math.round(totalVolume*(Peptamen.kcal/1000));
        protein = Math.round(totalVolume*(Peptamen.protein/1000));
        water = Math.round(totalVolume*(Peptamen.water/1000));
    }
    else if(TFformula =='Peptamen15')
    {
        kcal = Math.round(totalVolume*(Peptamen15.kcal/1000));
        protein = Math.round(totalVolume*(Peptamen15.protein/1000));
        water = Math.round(totalVolume*(Peptamen15.water/1000));
    }
    else if(TFformula =='Renalcal')
    {
        kcal = Math.round(totalVolume*(Renalcal.kcal/1000));
        protein = Math.round(totalVolume*(Renalcal.protein/1000));
        water = Math.round(totalVolume*(Renalcal.water/1000));
    }
}
function calcContinuous(formula,rate,hoursPerDay)
{
    TFformula=formula;
    let totalVolume = rate * hoursPerDay;
    calcTF(totalVolume);
    document.getElementById('tfKcal').innerHTML = kcal + ' Kcal';
    document.getElementById('tfProtein').innerHTML = protein + 'g Protein';
    document.getElementById('tfWater').innerHTML = water + 'ml Free Water';
}
function calcBolus(formula,volume,bolusPerDay)
{
    TFformula=formula;
    let totalVolume = volume * bolusPerDay;
    calcTF(totalVolume);
    document.getElementById('bolusKcal').innerHTML = kcal + ' Kcal';
    document.getElementById('bolusProtein').innerHTML =  protein + 'g Protein';
    document.getElementById('bolusWater').innerHTML =  water + 'ml Free Water';
}
function showVolume(val)
{
    document.getElementById('bolusVolumeOutput').value=val;
}
function showRate(val)
{
    document.getElementById('rateOutput').value=val;
}
function changeRateSlider(val)
{
    document.getElementById('tfRate').value=val
}
function changeRateSliderBolus(val)
{
    document.getElementById('bolusVolume').value=val;
}
//function to calculate TPN/PPN named by Shirley
function steezy(dextroseConcentration, aminoAcidConcentration, pnRate, hoursPerDay)
{
    let totalVolume = pnRate*hoursPerDay;
    let gramsDextrose = (dextroseConcentration/100)*totalVolume;
    let gramsAminoAcid = (aminoAcidConcentration/100)*totalVolume;
    document.getElementById('pnKcal').innerHTML = Math.round((gramsDextrose*3.4) + (gramsAminoAcid*4));
    document.getElementById('pnDextrose').innerHTML = Math.round(gramsDextrose);
    document.getElementById('pnProtein').innerHTML = Math.round(gramsAminoAcid);
    document.getElementById('pnTotalVolume').innerHTML = Math.round(totalVolume);
    
}
function showPnRate(val)
{
    document.getElementById('pnRateOutput').value=val;
}
function changePnRateSlider(val)
{
    document.getElementById('pnrate').value=val;
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
    document.getElementById('gir').innerHTML = Math.round(gir*10)/10 + ' mg/kg/min';
}
function convert(kg, lbs){
    let inputValue = document.getElementById('convertBefore').value;
    inputValue = parseFloat(inputValue,10);
    if(isNaN(inputValue))
    {
        document.getElementById('convertOutput').innerHTML = 'Enter a number to convert';
        return;
    }
    let output;
    if(kg.checked)
    {
        output = Math.round((inputValue*2.2)*10)/10;
        document.getElementById('convertOutput').innerHTML = output + ' lbs';
        return;
    }
    if(lbs.checked)
    {
        output = Math.round((inputValue/2.2)*10)/10;
        document.getElementById('convertOutput').innerHTML = output + ' kg';
        return;
    }
    if(isNaN(output))
    {
        document.getElementById('convertOutput').innerHTML = 'Enter unit';
        return;
    }
}
/*
make main div flex
allowed typing tf/tpn rates
styled TPN and TF outputs
bug fixes on IBW calculator

*/

