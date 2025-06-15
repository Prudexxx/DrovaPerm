document.getElementById('feedbackForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Предотвращаем стандартную отправку формы

    // Здесь можно добавить код для отправки данных, например, через AJAX

    // После успешной отправки:
    document.getElementById('status').textContent = 'Форма успешно отправлена!';

    document.getElementById('submitBtn').remove(); //удаляем кнопку
    
  });


 


  const form = document.getElementById('feedbackForm');
  const statusText = document.getElementById('status');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const data = {
      name: document.getElementById('name').value,
      phone: document.getElementById('phone').value
    };

    fetch('https://script.google.com/macros/s/AKfycbyhsnqyoOoJ1A8P1dHZ68OpSqRBoEibg3mPqCWNeuKyXp39ZLS4N0bPdKO5YBW5Bulo-A/exec', {
      method: 'POST',
      contentType: 'application/json',
      body: JSON.stringify(data)
    })
    .then(response => response.text())
    .then(text => {
      statusText.textContent = 'Данные успешно отправлены!';
      form.reset();
    })
    .catch(error => {
      statusText.textContent = 'Ошибка при отправке данных.';
    });
  });

  