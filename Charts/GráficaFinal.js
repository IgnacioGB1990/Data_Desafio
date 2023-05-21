// Función para actualizar los gráficos cuando se ingresan nuevos valores
function actualizarGraficos() {
    // Obtener los valores ingresados
    var huella_hidrica_personal = parseFloat(document.getElementById('huellaHidricaInput').value);
    var coste_diaria_personal = parseFloat(document.getElementById('costeDiarioInput').value);

    // Configuración de los datos de huella hídrica
    var valores_huella = [huella_hidrica_personal, huella_hidrica_espana];

    // Configuración de los datos de coste diario
    var valores_coste = [coste_diaria_personal, coste_diaria_espana];

    // Actualizar los datos de los gráficos
    huellaHidricaChart.data.datasets[0].data = valores_huella;
    costeDiarioChart.data.datasets[0].data = valores_coste;

    // Actualizar los gráficos
    huellaHidricaChart.update();
    costeDiarioChart.update();
  }

  // Configuración inicial de los datos de huella hídrica y coste diario
  var huella_hidrica_espana = 7568.79;
  var coste_diaria_espana = 14456.39;

  // Crear la configuración del gráfico de huella hídrica
  var huellaHidricaConfig = {
    type: 'bar',
    data: {
      labels: ['Tu huella hídrica', 'Huella hídrica media en España'],
      datasets: [
        {
          label: 'Huella hídrica diaria',
          data: [0, huella_hidrica_espana],
          backgroundColor: 'blue'
        }
      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Litros'
          }
        }
      }
    }
  };

  // Crear la configuración del gráfico de coste diario
  var costeDiarioConfig = {
    type: 'bar',
    data: {
      labels: ['Tu coste diario', 'Coste diario medio en España'],
      datasets: [{
          label: 'Coste diario',
          data: [0, coste_diaria_espana],
          backgroundColor: 'green'
          }
      ]
  },
      options: {
          scales: {
              y: {
                  beginAtZero: true,
                  title: {
                      display: true,
                      text: 'Euros'
                  }
              }
          }
      }
  };
  // Obtener el contexto del lienzo del gráfico de huella hídrica
  var huellaHidricaCtx = document.getElementById('huellaHidricaChart').getContext('2d');
  // Crear el gráfico de huella hídrica
  var huellaHidricaChart = new Chart(huellaHidricaCtx, huellaHidricaConfig);

  // Obtener el contexto del lienzo del gráfico de coste diario
  var costeDiarioCtx = document.getElementById('costeDiarioChart').getContext('2d');
  // Crear el gráfico de coste diario
  var costeDiarioChart = new Chart(costeDiarioCtx, costeDiarioConfig);

  // Actualizar los gráficos cuando se ingresan nuevos valores
  document.getElementById('huellaHidricaInput').addEventListener('input', actualizarGraficos);
  document.getElementById('costeDiarioInput').addEventListener('input', actualizarGraficos);