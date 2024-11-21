"use client";

import { useState, useEffect } from "react";
import {
  Layout,
  Card,
  Table,
  Select,
  Switch,
  Input,
  Button,
  Modal,
  Form,
  InputNumber,
  Avatar,
} from "antd";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import StaticCurrencyCard from "./StaticCurrencyCard";
import { fetchCryptoData } from "../utils/api";
import Link from "next/link";

const { Header, Content } = Layout;

export default function CryptoDashboard() {
  const [cryptoData, setCryptoData]:any = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState("bitcoin");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [staticCurrencies, setStaticCurrencies] = useState([
    { id: "balcoin", name: "Balcoin", amount: 0.5, price: 100000 },
  ]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingCurrency, setEditingCurrency]:any = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCryptoData();
      const balcoin = {
        "ath": 93477,
        "ath_change_percentage": -1.13858,
        "ath_date": "2024-11-13T16:15:35.520Z",
        "atl": 67.81,
        "atl_change_percentage": 136183.9798,
        "atl_date": "2013-07-06T00:00:00.000Z",
        "circulating_supply": 19784446,
        "current_price": 2.59,
        "fully_diluted_valuation": 1938297656764,
        "high_24h": 92653,
        "id": "bapple",
        "image": "https://api.skillerszone.com//photos/blog/images/dall_e_2024-11-19_19.51.36_-_a_circular_cryptocurrency_logo_for__bapple___resembling_bitcoin_with_a_gold_background__featuring_the_letter__b__in_bold_white_at_the_center._an_apple-removebg-preview-1732024402002.png",
        "last_updated": "2024-11-19T12:48:05.070Z",
        "low_24h": 89443,
        "market_cap": 182610,
        "market_cap_change_24h": 30454883321,
        "market_cap_change_percentage_24h": 1.69604,
        "market_cap_rank": 1,
        "max_supply": 21000000,
        "name": "Bapple",
        "price_change_24h": 1528.4,
        "price_change_percentage_24h": 1.6851,
        "roi": null,
        "sparkline_in_7d": {price: [0.48, 0.86, 1.67, 1.26, 2.59]},
        "symbol": "bap",
        "total_supply": 21000000,
        "total_volume": 80805119651
      }
      setCryptoData([{...balcoin}, ...data]);
    };
    fetchData();
    const interval = setInterval(fetchData, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  const handleCurrencySelect = (value:any) => {
    setSelectedCurrency(value);
  };

  const handleDarkModeToggle = (checked:any) => {
    setIsDarkMode(checked);
  };

  const handleSearch = (e:any) => {
    setSearchTerm(e.target.value);
  };

  const handleStaticCurrencyEdit = (currency:any) => {
    setEditingCurrency(currency);
    setIsModalVisible(true);
  };

  const handleModalOk = (values:any) => {
    const updatedCurrencies:any = staticCurrencies.map((currency:any) =>
      currency?.id === editingCurrency?.id
        ? { ...editingCurrency, ...values }
        : currency
    );
    setStaticCurrencies(updatedCurrencies);
    setIsModalVisible(false);
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
    setEditingCurrency(null);
  };

  const filteredData = cryptoData.filter((crypto:any) =>
    crypto?.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const columns = [
    {
      title: "Icon",
      dataIndex: "icon",
      key: "icon",
      render: (_:any, record: any, idx: number) => (
        <Avatar key={idx} src={record?.image} className=" object-contain" />
      ),
    },
    { title: "Name", dataIndex: "name", key: "name" },
    {
      title: "Price",
      dataIndex: "current_price",
      key: "price",
      render: (price:any) => `$${price.toFixed(2)}`,
    },
    {
      title: "24h Change",
      dataIndex: "price_change_percentage_24h",
      key: "change",
      render: (change:any) => `${change.toFixed(2)}%`,
    },
    {
      title: "Market Cap",
      dataIndex: "market_cap",
      key: "market_cap",
      render: (cap:any) => `$${cap.toLocaleString()}`,
    },
  ];

  return (
    <Layout
      className={`min-h-screen ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100"
      }`}
    >
      <Header className="flex justify-between items-center bg-transparent">
        <h1
          className={`text-2xl font-bold ${
            isDarkMode ? "text-white" : "text-gray-800"
          }`}
        >
          Crypto Dashboard
        </h1>
        <Link href="/payment">
        <Button>Buy Bapple</Button>
        </Link>
        <Switch
          checkedChildren={<MoonIcon className="h-4 w-4" />}
          unCheckedChildren={<SunIcon className="h-4 w-4" />}
          onChange={handleDarkModeToggle}
        />
      </Header>
      <Content className="p-8">
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {staticCurrencies.map((currency) => (
            <StaticCurrencyCard
              key={currency.id}
              currencies={setCryptoData || []}
            //   onEdit={() => handleStaticCurrencyEdit(currency)}
              isDarkMode={isDarkMode}
            />
          ))}
        </div> */}
        <Card className={`mb-8 ${isDarkMode ? "bg-gray-800 text-white" : ""}`}>
          <div className="mb-4 flex justify-between items-center">
            <Input
              placeholder="Search currency..."
              value={searchTerm}
              onChange={handleSearch}
              style={{ width: 300 }}
            />
            <Select
              style={{ width: 200 }}
              value={selectedCurrency}
              onChange={handleCurrencySelect}
            >
              {cryptoData.map((crypto:any) => (
                <Select.Option key={crypto?.id} value={crypto?.id}>
                  {crypto?.name}
                </Select.Option>
              ))}
            </Select>
          </div>
          <div className="flex flex-wrap gap-4">
            <ResponsiveContainer width="48%" height={300}>
              <LineChart
                data={
                  cryptoData
                    .find((c:any) => c?.id === selectedCurrency)
                    ?.sparkline_in_7d?.price.map((price:any, index:number) => ({
                      time: index,
                      price,
                    })) || []
                }
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="price" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
            <ResponsiveContainer width="48%" height={300}>
              <BarChart
                data={
                  cryptoData
                    .find((c:any) => c?.id === selectedCurrency)
                    ?.sparkline_in_7d?.price.map((price:any, index: number) => ({
                      time: index,
                      price,
                    })) || []
                }
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="price" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
        <Card className={`${isDarkMode ? "bg-gray-800 text-white" : ""}`}>
          <Table
            dataSource={filteredData}
            columns={columns}
            rowKey="id"
            pagination={{ pageSize: 10 }}
          />
        </Card>
      </Content>

      {/* Modal for Editing Static Currency */}
      <Modal
        title="Edit Currency"
        visible={isModalVisible}
        onCancel={handleModalCancel}
        footer={null}
      >
        {editingCurrency && (
          <Form
            initialValues={editingCurrency}
            onFinish={handleModalOk}
            layout="vertical"
          >
            <Form.Item
              label="Amount"
              name="amount"
              rules={[{ required: true, message: "Please enter amount" }]}
            >
              <InputNumber min={0} style={{ width: "100%" }} />
            </Form.Item>
            <Form.Item
              label="Price"
              name="price"
              rules={[{ required: true, message: "Please enter price" }]}
            >
              <InputNumber min={0} style={{ width: "100%" }} />
            </Form.Item>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </Form>
        )}
      </Modal>
    </Layout>
  );
}
