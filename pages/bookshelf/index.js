import Layout from '@components/Layout';
import { getAllBooks } from 'lib/posts';
import dayjs from 'dayjs';
import { BookList } from '@components/BookList'

const MONTHS = [
  'January',   'February',
  'March',     'April',
  'May',       'June',
  'July',      'August',
  'September', 'October',
  'November',  'December'
]

export default function Post({
  books,
  keysForYears,
  monthsReversed
}) {
  return (
    <Layout>
      {
        keysForYears.map((year) => (
          <section className='inner--sm'>
            <h2>{ year }</h2>
            {
              monthsReversed.map((month) => books[year][month].length !== 0 ? (
              <>
                <h3>{ month }</h3>
                <BookList bookList={books[year][month]}></BookList>
              </>
              ) : null) 
            }
          </section>
        ))
      }
    </Layout>
  );
};

export async function getServerSideProps() {
  const booksFromRSS = await getAllBooks();
  const DATE_FROM = new Date('2023', '00', '01')

  const parsedBooks = JSON.parse(booksFromRSS).rss.channel.item
    .reduce((list, currentItem) => {
      const { user_read_at } = currentItem;
      const dateExists = Date.parse(user_read_at) || 0;
      if (dateExists && new Date(user_read_at) >= DATE_FROM) {
        const date = dayjs(user_read_at);
        currentItem.yearFrom = date.format('YYYY');
        currentItem.monthFrom = MONTHS[new Date(user_read_at).getMonth()];
        list.push(currentItem);
      }

      return list;
    }, []);

  const list = {}
  const currentYear = parseInt(new Date().getFullYear(), 10);
  for (let i = 2023; i <= currentYear; i++) {
    list[i] = MONTHS.reduceRight((prev, current) => {
        prev[current] = []
        return prev
    }, {})
  }

  for (let book of parsedBooks) {
    const { yearFrom, monthFrom } = book;
    list[yearFrom][monthFrom].push(book)
  }

  const keysForYears = Object.keys(list);
  const monthsReversed = MONTHS.slice().reverse();

  return { props: { books: list, keysForYears, monthsReversed } }
}