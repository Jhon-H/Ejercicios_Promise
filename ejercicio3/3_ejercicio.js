let button = document.querySelector("#button");
button.addEventListener('click', () =>{ usePrintInfo(); });

const printInfo = () =>{
  return new Promise((resolve, reject) =>{
    let age = Number(document.querySelector("#form__age__age").value);
    let weigth = Number(document.querySelector("#form__weigth__weigth").value);
  
    if(isNaN(age) || isNaN(weigth) || age <= 0  || weigth <= 0)
      reject(new Error ("Datos incorrectos"));
    else resolve({"age": age, "weigth":weigth});
  });
}

const usePrintInfo = async () =>{
  try{
    let info = await printInfo();
    alert(`Edad ${info["age"]} Peso: ${info["weigth"]}`);
    if(info["weigth"] > 100) window.alert("Por favor, prestale atencion a tu peso !!");
  }
  catch(error){
    window.alert(error);
  }
  finally{
    window.alert("Ten un buen día, hasta luego.");
  }
}