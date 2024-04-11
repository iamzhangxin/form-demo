import {Form, Input, Radio} from "@nutui/nutui-react-taro"
import './index.scss'

function Index() {

    const [form] = Form.useForm()
    const submitSucceed = (values: any) => {
        console.log(values)
    }

    return (
        <Form form={form} labelPosition="right" onFinish={(values) => submitSucceed(values)}>
            <Form.Item
                label="昵称"
                name="username"
                required
                validateTrigger="onBlur"
                rules={[{required: true, message: '请输入昵称'}]}
            >
                <Input placeholder="请输入昵称" type="text"/>
            </Form.Item>
            <Form.Item label="Radio Group" name="radio_group">
                <Radio.Group  onChange={(value) => {
                    console.log(value)
                }}>
                    <Radio value="1">Radio 1</Radio>
                    <Radio value="2">Radio 2</Radio>
                </Radio.Group>
            </Form.Item>
            {
                form.getFieldValue("radio_group") === '2' &&(
                    <Form.Item
                        label="年龄"
                        name="age"
                        required
                        validateTrigger="onBlur"
                        rules={[{required: true, message: '请输入年龄'}]}
                    >
                        <Input placeholder="请输入年龄" type="text"/>
                    </Form.Item>
                )
            }
        </Form>
    )
}

export default Index
