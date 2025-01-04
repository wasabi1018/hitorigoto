import {FAQData} from '../../types/FAQData';

/** よくある質問集 */
const Faqs: FAQData[] = [
  {
      "id":       1,
      "question": "このサービスは？",
      "answer":   "ひとりごとを呟き、他人のヒトリゴトを聞くことができるサービスです。"
  },
  {
      "id":       2,
      "question": "このサービスは？",
      "answer":   "ひとりごとを呟き、他人のヒトリゴトを聞くことができるサービスです。"
  },
  {
      "id":       3,
      "question": "このサービスは？",
      "answer":   "ひとりごとを呟き、他人のヒトリゴトを聞くことができるサービスです。"
  },
  {
      "id":       4,
      "question": "このサービスは？",
      "answer":   "ひとりごとを呟き、他人のヒトリゴトを聞くことができるサービスです。"
  },
  {
      "id":       5,
      "question": "このサービスは？",
      "answer":   "ひとりごとを呟き、他人のヒトリゴトを聞くことができるサービスです。"
  },
  {
      "id":       6,
      "question": "このサービスは？",
      "answer":   "ひとりごとを呟き、他人のヒトリゴトを聞くことができるサービスです。"
  },
  {
      "id":       7,
      "question": "このサービスは？",
      "answer":   "ひとりごとを呟き、他人のヒトリゴトを聞くことができるサービスです。"
  },
  {
      "id":       8,
      "question": "このサービスは？",
      "answer":   "ひとりごとを呟き、他人のヒトリゴトを聞くことができるサービスです。"
  }
];

const FAQ = () => {

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