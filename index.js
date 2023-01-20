var pr;

function b1c(){

    var x;
    x = document.getElementById("i1").value;

    if ( x%1==0 && x>1 ){

        pr = true;

        for (i=2; i<Math.ceil(Math.sqrt(x)); i++){

            if (x%i==0){
                pr = false;
                break;
            }

        }

        if (pr){

            document.getElementById("p1").innerHTML = "عدد " + x + " اول است";

        }else{

            document.getElementById("p1").innerHTML = "عدد " + x + " اول نیست";

        }
        
    }else{
        document.getElementById("p1").innerHTML = "فقط اعداد صحیح بزرگتر از یک قابل قبول هستند";
    }

}

