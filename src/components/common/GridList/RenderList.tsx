interface RenderListProps<T> {
  records: T[];
  renderItem: (record: T) => React.ReactNode;
}

type HasId = { id?: number };

const RenderList = <T extends HasId>({
  records,
  renderItem,
}: RenderListProps<T>) => {
  return (
    <div>
      {records.length > 0 ? (
        records.map((record) => <div key={record.id}>{renderItem(record)}</div>)
      ) : (
        <p>No records found</p>
      )}
    </div>
  );
};

export default RenderList;
