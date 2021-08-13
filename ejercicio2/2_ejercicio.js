let button = document.querySelector("#button");
button.addEventListener('click', () =>{ useSUma(); });

const suma = () =>{
  
  return new Promise((resolve, reject) =>{
    let num1 = Number(document.querySelector("#one").value);
    let num2 = Number(document.querySelector("#two").value);
    let num3 = Number(document.querySelector("#three").value);

    if(isNaN(num1) || isNaN(num2) || isNaN(num3)) reject(new Error ("Entrada invalida"));
    else resolve(num1 + num2 + num3);
  });
}

const useSUma = async () =>{
  try{
    let val = await suma();
    if(val > 25) window.alert("Valor : " + val);
  }
  catch(error){
    window.alert(error);
  }
  finally{
    window.alert("Proceso finalizado")
  }
}