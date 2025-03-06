function calculation()
{
let a=document.getElementById("firstvalue").value;

let b=document.getElementById("firstconverter").value;

let C=document.getElementById("secondconverter").value;

if(b=="Meter" && C=="CentiMeter")
{
    let answer = a*100;
 document.getElementById("output").innerHTML=answer;
}
else if(b=="Meter" && C=="Kilometer")
{
    let answer=a/1000;
    
 document.getElementById("output").innerHTML=answer;
}
else if(b=="Meter" && C=="Meter")
    {
        
 document.getElementById("output").innerHTML=a;
    }

//centimeter

if(b=="CentiMeter" && C=="Meter")
    {
        let answer = a/100;
     document.getElementById("output").innerHTML=answer;
    }
    else if(b=="CentiMeter" && C=="Kilometer")
{
    let answer = a/100000;
    document.getElementById("output").innerHTML=answer;
}   
else if(b=="CentiMeter" && C=="CentiMeter")
    {
      
        document.getElementById("output").innerHTML=a;
    } 
    
    // kilometer

    if(b=="Kilometer" && C=="Meter")
        {
            let answer = a*1000;
         document.getElementById("output").innerHTML=answer;
        }
    
        else if(b=="Kilometer" && C=="CentiMeter")
            {
                let answer = a*100000;
             document.getElementById("output").innerHTML=answer;
            }
            else if(b=="Kilometer" && C=="Kilometer")
                {
                 document.getElementById("output").innerHTML=a;
                }

                //feet


                if(b=="feet" && C=="inch")
                    {
                        let answer = a*12;
                     document.getElementById("output").innerHTML=answer;
                    }
else if(b=="feet" && C=="Meter")
{
    let answer = a*0.3048;
    document.getElementById("output").innerHTML=answer;
}
    else if(b=="feet" && C=="CentiMeter")
    {
        let answer = a*30.48;
        document.getElementById("output").innerHTML=answer;

    }
    else if(b=="feet" && C=="Kilometer")
    {

        let answer = a*0.0003048;
        document.getElementById("output").innerHTML=answer;

    }        
    else if(b=="feet" && C=="feet")
        {
    
            document.getElementById("output").innerHTML=a;
    
        }    

}


