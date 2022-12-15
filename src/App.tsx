import './App.css';
import ThemeProvider from './theme/ThemeProvider';
import Header from './components/Header';
import Input from './components/Input';
import Select from './components/Select';

const optionsSelect = [
  {
    value: 'africa',
    label: 'Africa'
  },
  {
    value: 'america',
    label: 'America'
  },
  {
    value: 'asia',
    label: 'Asia'
  }
]

function App() {
  return (
    <ThemeProvider>
      <Header />
      <main className="h-screen pt-6 bg-gray-light-background dark:bg-blue-dark-background">
        <section className="mx-auto container">
          <Input value="" onChange={() => {}} placeholder="Search for a country..." />

          <div className="relative mt-6">
            <Select placeholder="Filter by Region" onChange={() => {}} options={optionsSelect} />
          </div>
        </section>
        
      </main>
    </ThemeProvider>
  );
}

export default App;
