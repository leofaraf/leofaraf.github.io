const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  item.addEventListener('click', () => {
    const answer = item.querySelector('.faq-answer');
    const isOpen = answer.classList.contains('active');

    if (isOpen) {
      answer.classList.remove('active');
      return;
    }

    faqItems.forEach(otherItem => {
      const otherAnswer = otherItem.querySelector('.faq-answer');
      otherAnswer.classList.remove('active');
    });

    answer.classList.add('active');
  });
});