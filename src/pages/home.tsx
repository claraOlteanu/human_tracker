import '../app/globals.css';
import Link from 'next/link';

export default function Home() {

  return (
      <main className="container main" style={{ backgroundImage: "url('C:\Users\clara_olteanu\OneDrive - Dell Technologies\Desktop\Licenta\human-tracker-backend\public\welcome-background.jpg')" }}>
        <h1><center>Real-Time Indoor Tracker</center></h1>
        <h3><center>Track the movements of a person inside their home</center></h3>
        <Link href="/login"><button className={'start-tracking-button'}><span>Start Tracking</span></button></Link>
      </main>
  )
}
