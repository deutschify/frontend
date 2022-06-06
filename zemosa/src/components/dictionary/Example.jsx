export const Example = ({ mean }) => {
    console.log(mean);
    return (
        <div className="example-list">
            {mean.map(val =>
                val.meanings.map((means) =>
                    means.definitions.map((def) => (
                        <div key={def.example}>
                            <li>{def.example}</li>
                           
                        </div>
                    ))
                )
            )}
        </div>
    );
};
