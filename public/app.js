


document.addEventListener('DOMContentLoaded', ()=>{
    setupFiltro();

})
//funções setup
function setupFiltro(){

    //variaveis e constantes
    const btfiltro = document.getElementById('btfilter');
    const filtroDropdown = document.getElementById('filter-dropdown');
    let filtroVazio = btfiltro.querySelector('.bi-funnel');
    let filtroPrenchido = btfiltro.querySelector('.bi-funnel-fill');
    let filtroFechado = true;

    //config inicial
    fecharDropdown(filtroDropdown);
    desativarFiltro();

    //config filtro Ativado/Desativado
    const inputs = Array.from(filtroDropdown.querySelectorAll('input'));
    inputs.forEach((input, i, array) => {
        input.addEventListener('change', ()=>{
            if(input.checked){
                ativarFiltro();
                
            }else{
                let numChecked = 0;
                array.some((checkbox)=>{
                    if(checkbox.checked){
                        numChecked++;
                        return true; 
                    }
                });
                if(numChecked == 0){
                    desativarFiltro();
                }
                
            }
        });  
    });

    //config abrir fechar
    btfiltro.addEventListener('click', ()=>{
        if(filtroFechado){
            abrirDropdown(filtroDropdown);
            filtroFechado = false;
        }else{
            fecharDropdown(filtroDropdown);
            filtroFechado = true;
        }
    })
    
    //funções específicas
    function ativarFiltro(){
        trocarComponente1por2(filtroVazio,  filtroPrenchido);
    }
    function desativarFiltro(){
        trocarComponente1por2(filtroPrenchido, filtroVazio);
    }
}

//funções reutilizaveis
function abrirDropdown(dropdown){
        
    dropdown.style.display = 'inline';
}
function fecharDropdown(dropdown){
    
    dropdown.style.display = 'none';
}
function trocarComponente1por2(comp1, comp2){
    comp1.style.display = 'none';
    comp2.style.display = 'inline';
}

