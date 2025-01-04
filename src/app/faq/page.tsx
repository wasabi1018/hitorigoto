import {NextPage} from 'next';
import {FAQData} from '../../types/FAQData';
import {Faqs} from '../../data/faq.json';

interface FAQProps {
    faqData: FAQData[];
}

const FAQ: NextPage<FAQProps> = () => {

  return (
      <div className='p-faq'>
        <h1>よくある質問</h1>
        <div>
          <ul>
            {Faqs.map((faq) => (
              <li key={faq.id}>
                <strong>{faq.question}</strong>
                <p>{faq.answer}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

export default FAQ;