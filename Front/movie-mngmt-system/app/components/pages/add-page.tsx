import { Button, DatePicker, Flex, Form, Input, Rate } from 'antd'
import { useMoviesApi } from '~/hooks/useMoviesApi';

export const AddPage = () => {
    const [form] = Form.useForm();
    const { addMovie, isExecuting } = useMoviesApi();

    return (
        <main className="flex w-full h-screen justify-center items-center">
            <Form
                form={form}
                // onChange={() => form.validateFields()}
                labelAlign='left'
                labelCol={{ span: 8 }}
                disabled={isExecuting}
                wrapperCol={{ span: 100 }}
                style={{ maxWidth: 600 }}
                onFinish={async (values) => {
                    console.log(values);
                    const formData = new FormData();
                    const valuesArray = Object.entries(values);

                    for (const value of valuesArray) {
                        formData.append(value[0], !!value[1] ? String(value[1]) : "");
                    }

                    await addMovie(formData);
                }}
                onFinishFailed={(errorInfo) => {
                    console.error("Submitting failed", errorInfo.errorFields);
                }}
                validateTrigger={['onChange', 'onBlur']}
                name="create-movie">
                <Form.Item
                    label="Title"
                    name="title"
                    hasFeedback
                    validateDebounce={1000}
                    rules={[
                        {
                            required: true,
                            min: 1,
                            type: 'string',
                            message: "Please enter a title"
                        }
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Description"
                    name="description"
                    hasFeedback
                    validateDebounce={1000}
                    rules={[
                        {
                            required: true,
                            min: 1,
                            type: 'string',
                            message: "Please enter a description"
                        }
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Released"
                    name="releaseDate"
                    hasFeedback
                    validateDebounce={1000}
                    wrapperCol={{

                    }}
                    required
                    rules={[
                        {
                            required: true,
                            min: 1,
                            type: 'date',
                            message: "Please enter a release date"
                        }
                    ]}
                >
                    <DatePicker style={{ width: "100%" }} />
                </Form.Item>

                <Form.Item
                    label="Rating"
                    name="rating"
                >
                    <Rate />
                </Form.Item>

                <Form.Item
                    label="Image url"
                    name="imageUrl"
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Trailer url"
                    name="trailerUrl"
                >
                    <Input />
                </Form.Item>


                <Form.Item
                    label={null}>
                    <Flex
                        align='center'
                        justify='space-between'>
                        <Button
                            htmlType='submit'
                            type='primary'>
                            Create
                        </Button>

                        <Button
                            htmlType="button"
                            onClick={() => form.resetFields()}>
                            Reset
                        </Button>
                    </Flex>
                </Form.Item>

            </Form>
        </main>
    )
}
