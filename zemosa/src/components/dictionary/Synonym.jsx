 export const Synonym = ({ mean }) => {
    return (
        <div className="synonyms-list">
            {mean.map((val) =>
                val.meanings.map((means) =>

                    means.definitions.map((def, i) => {
                        return def.synonyms?.map((syn) => <li key={i}>{syn}</li>);

                    })
                )
            )}
        </div>
    );
};
