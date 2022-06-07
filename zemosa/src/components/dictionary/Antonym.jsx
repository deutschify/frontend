export const Antonym = ({ mean }) => {
    return (
        <div className="antonyms-list">
            {mean.map((val) =>
                val.meanings.map((means) =>
                    means.definitions.map((def) => {
                        return def.antonyms?.map((ant) => <li>{ant}</li>);
                    })
                )
            )}
        </div>
    );
};