import { Create, useForm, useSelect } from "@refinedev/antd";
import MDEditor from "@uiw/react-md-editor";
import { Form, Input, Select, InputNumber } from "antd";

export const MovieCreate = () => {
  const { formProps, saveButtonProps } = useForm({});

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label={"Title"}
          name={["title"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Year"}
          name={["year"]}
          rules={[
            {
              required: true,
            },
            {
              type: "number",
              min: 1888,
              max: new Date().getFullYear(),
            },
          ]}
        >
          <InputNumber style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item
          label={"Genre"}
          name={["genre"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            mode="multiple"
            options={[
              { value: "Drama", label: "Drama" },
              { value: "Action", label: "Action" },
              { value: "Comedy", label: "Comedy" },
              { value: "Horror", label: "Horror" },
              { value: "Sci-Fi", label: "Sci-Fi" },
              // Add other genres as needed
            ]}
          />
        </Form.Item>
        <Form.Item
          label={"Rating"}
          name={["rating"]}
          rules={[
            {
              required: true,
            },
            {
              type: "number",
              min: 0,
              max: 10,
            },
          ]}
        >
          <InputNumber step={0.1} style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item
          label={"Director"}
          name={["director"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Actors"}
          name={["actors"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            mode="tags"
            tokenSeparators={[',']}
            placeholder="Add actors"
          />
        </Form.Item>
        <Form.Item
          label={"Plot"}
          name={["plot"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <MDEditor data-color-mode="light" />
        </Form.Item>
        <Form.Item
          label={"Poster URL"}
          name={["poster"]}
          rules={[
            {
              required: true,
            },
            {
              type: "url",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Trailer URL"}
          name={["trailer"]}
          rules={[
            {
              required: true,
            },
            {
              type: "url",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Runtime (minutes)"}
          name={["runtime"]}
          rules={[
            {
              required: true,
            },
            {
              type: "number",
              min: 1,
            },
          ]}
        >
          <InputNumber style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item
          label={"Awards"}
          name={["awards"]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Country"}
          name={["country"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Language"}
          name={["language"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Box Office"}
          name={["boxOffice"]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Production"}
          name={["production"]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Website"}
          name={["website"]}
          rules={[
            {
              type: "url",
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Create>
  );
};
