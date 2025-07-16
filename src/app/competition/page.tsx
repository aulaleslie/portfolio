import CompetitionCreateForm from "../components/competition/CompetitionCreateForm";
import Leaderboard from "../components/competition/Leaderboard";
import MatchGeneration from "../components/competition/MatchGeneration";
import ScoreInput from "../components/competition/ScoreInput";

export default function CompetitionDashboardPage() {
    return (
        <div className="max-w-4xl mx-auto p-6 space-y-10">
            <h1 className="text-3xl font-bold text-center">Competition Dashboard</h1>

            <section>
                <h2 className="text-xl font-semibold mb-2">🛠 Create Competition</h2>
                <CompetitionCreateForm />
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-2">📆 Generate Matches</h2>
                <MatchGeneration />
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-2">🎯 Enter Scores</h2>
                <ScoreInput />
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-2">🏆 Leaderboard</h2>
                <Leaderboard />
            </section>
        </div>
    );
}
