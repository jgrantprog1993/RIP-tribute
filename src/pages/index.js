import ObituaryList from '../app/components/ObituaryList';
import obituaries from '../data/obituaries';
import CountyList from '../app/components/CountyList';

function HomePage() {
    return (
        <div>
            <h1>Obituaries</h1>
            <CountyList />
            <ObituaryList obituaries={obituaries} />
        </div>
    );
}

export default HomePage; 