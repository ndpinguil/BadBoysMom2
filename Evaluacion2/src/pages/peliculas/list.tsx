import {
  DateField,
  DeleteButton,
  EditButton,
  List,
  MarkdownField,
  ShowButton,
  useTable,
} from "@refinedev/antd";
import { useMany, type BaseRecord } from "@refinedev/core";
import { Space, Table } from "antd";

export const MovieList = () => {
  const { tableProps } = useTable({
    syncWithLocation: true,
  });

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title={"ID"} />
        <Table.Column dataIndex="title" title={"Title"} />
        <Table.Column dataIndex="year" title={"Year"} />
        <Table.Column dataIndex="genre" title={"Genre"} />
        <Table.Column dataIndex="rating" title={"Rating"} />
        <Table.Column dataIndex="director" title={"Director"} />
        <Table.Column dataIndex="actors" title={"Actors"} />
        <Table.Column dataIndex="plot" title={"Plot"} />
        <Table.Column dataIndex="poster" title={"Poster"} />
        <Table.Column dataIndex="trailer" title={"Trailer"} />
        <Table.Column dataIndex="runtime" title={"Runtime"} />
        <Table.Column dataIndex="awards" title={"Awards"} />
        <Table.Column dataIndex="country" title={"Country"} />
        <Table.Column dataIndex="language" title={"Language"} />
        <Table.Column dataIndex="boxOffice" title={"Box Office"} />
        <Table.Column dataIndex="production" title={"Production"} />
        <Table.Column dataIndex="website" title={"Website"} />
        <Table.Column
          title={"Actions"}
          dataIndex="actions"
          render={(_, record: BaseRecord) => (
            <Space>
              <EditButton hideText size="small" recordItemId={record.id} />
              <ShowButton hideText size="small" recordItemId={record.id} />
              <DeleteButton hideText size="small" recordItemId={record.id} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};
