
import React, { useEffect, useMemo, useState } from "react";

const STORE = {
  name: "VP訂購系統",
  subtitle: "商用版線上購物車 / 下單系統",
  announcement: "已接上商品圖片與 Google 試算表送單網址，可直接作為 Vercel 部署版本。",
  servicePhone: "0900-000-000",
  shippingFee: 60,
  freeShippingThreshold: 3000,
};

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbynbRhYPOwaJ3wO2B4ESmInr1WIrJk4eEUHXw2eO7C-1D_LRIuqhlxnZOeq3Ows7SqK/exec";

const PRODUCTS = [
  {
    id: 1,
    code: "E401",
    name: "女神酵素液",
    price: 899,
    category: "三王二魔",
    image: "/images/A016.產品圖片.154116.jpg",
    description: "三王二魔系列商品。",
  },
  {
    id: 2,
    code: "E402",
    name: "美妍X關鍵賦活飲",
    price: 1380,
    category: "適應原保健",
    image: "/images/A015.產品圖片.154128.jpg",
    description: "適應原保健系列商品。",
  },
  {
    id: 3,
    code: "E403",
    name: "神孅膠囊",
    price: 1580,
    category: "三王二魔",
    image: "/images/A017.產品圖片.180525.jpg",
    description: "三王二魔系列商品。",
  },
  {
    id: 4,
    code: "E404",
    name: "魔力機能飲-可可",
    price: 999,
    category: "三王二魔",
    image: "/images/A019.產品圖片.153936.jpg",
    description: "三王二魔系列商品。",
  },
  {
    id: 5,
    code: "E406",
    name: "水晶晶亮亮膠囊",
    price: 1280,
    category: "適應原保健",
    image: "/images/A013.產品圖片.165748.jpg",
    description: "適應原保健系列商品。",
  },
  {
    id: 6,
    code: "E407",
    name: "免醫專科",
    price: 2080,
    category: "適應原保健",
    image: "/images/A014.產品圖片.181754.png",
    description: "適應原保健系列商品。",
  },
  {
    id: 7,
    code: "E408",
    name: "魔力機能飲-抹茶",
    price: 999,
    category: "三王二魔",
    image: "/images/A020.產品圖片.154028.jpg",
    description: "三王二魔系列商品。",
  },
  {
    id: 8,
    code: "E409",
    name: "王者之原",
    price: 699,
    category: "三王二魔",
    image: "/images/A018.產品圖片.154052.jpg",
    description: "三王二魔系列商品。",
  },
  {
    id: 9,
    code: "P301",
    name: "瞬白激光精華4G",
    price: 2580,
    category: "微代謝保養品",
    image: "/images/A006.產品圖片.175645.jpg",
    description: "微代謝保養品系列商品。",
  },
  {
    id: 10,
    code: "P302",
    name: "煥膚淨顏精華4S",
    price: 2580,
    category: "微代謝保養品",
    image: "/images/A005.產品圖片.180007.jpg",
    description: "微代謝保養品系列商品。",
  },
  {
    id: 11,
    code: "P303",
    name: "超導緊緻面膜",
    price: 799,
    category: "微代謝保養品",
    image: "/images/A012.產品圖片.175826.jpg",
    description: "微代謝保養品系列商品。",
  },
  {
    id: 12,
    code: "P304",
    name: "奇肌修復全能霜6",
    price: 2680,
    category: "微代謝保養品",
    image: "/images/A008.產品圖片.165601.jpg",
    description: "微代謝保養品系列商品。",
  },
  {
    id: 13,
    code: "P305",
    name: "超逆齡修復精萃3",
    price: 1880,
    category: "微代謝保養品",
    image: "/images/A004.產品圖片.174927.jpg",
    description: "微代謝保養品系列商品。",
  },
  {
    id: 14,
    code: "P501",
    name: "超活水潤防曬乳7",
    price: 1380,
    category: "微代謝保養品",
    image: "/images/A009.產品圖片.165635.jpg",
    description: "微代謝保養品系列商品。",
  },
  {
    id: 15,
    code: "P502",
    name: "淨白神奇C粉2A",
    price: 2980,
    category: "微代謝保養品",
    image: "/images/A003.產品圖片.180148.jpg",
    description: "微代謝保養品系列商品。",
  },
  {
    id: 16,
    code: "P504",
    name: "胺基酸淨白潔顏慕絲1",
    price: 1180,
    category: "微代謝保養品",
    image: "/images/A001.產品圖片.163708.jpg",
    description: "微代謝保養品系列商品。",
  },
  {
    id: 17,
    code: "P505",
    name: "鉑金多鈦晶露2",
    price: 1960,
    category: "微代謝保養品",
    image: "/images/A002.產品圖片.180312.jpg",
    description: "微代謝保養品系列商品。",
  },
  {
    id: 18,
    code: "P506",
    name: "亮膚防護霜7A",
    price: 1180,
    category: "微代謝保養品",
    image: "/images/P506.產品圖片.042725.jpg",
    description: "微代謝保養品系列商品。",
  },
  {
    id: 19,
    code: "P507",
    name: "超能菁純高C原液5",
    price: 1380,
    category: "微代謝保養品",
    image: "/images/A007.產品圖片.175928.jpg",
    description: "微代謝保養品系列商品。",
  },
  {
    id: 20,
    code: "P508",
    name: "玻色因時光面膜",
    price: 799,
    category: "微代謝保養品",
    image: "/images/A011.產品圖片.165732.jpg",
    description: "微代謝保養品系列商品。",
  },
  {
    id: 21,
    code: "P509",
    name: "金箔唇萃精華油",
    price: 380,
    category: "微代謝保養品",
    image: "/images/A010.產品圖片.175820.jpg",
    description: "微代謝保養品系列商品。",
  }
];

const FULFILLMENT_OPTIONS = [
  { value: "delivery", label: "宅配寄送" },
  { value: "pickup", label: "到店取貨" },
  { value: "phone", label: "電話確認" },
];

const PAYMENT_OPTIONS = [
  { value: "bank", label: "銀行轉帳" },
  { value: "cod", label: "貨到付款" },
  { value: "store", label: "到店付款" },
];

const CART_STORAGE_KEY = "vp-shopping-cart";
const CUSTOMER_STORAGE_KEY = "vp-shopping-customer";

type Product = (typeof PRODUCTS)[number];
type CartItem = Product & { qty: number };
type CustomerForm = {
  name: string;
  phone: string;
  address: string;
  note: string;
  fulfillment: string;
  payment: string;
};

function addItemToCart(cart: CartItem[], product: Product): CartItem[] {
  const found = cart.find((item) => item.id === product.id);
  if (found) {
    return cart.map((item) =>
      item.id === product.id ? { ...item, qty: item.qty + 1 } : item
    );
  }
  return [...cart, { ...product, qty: 1 }];
}

function changeCartItemQty(cart: CartItem[], id: number, delta: number): CartItem[] {
  return cart
    .map((item) =>
      item.id === id ? { ...item, qty: Math.max(0, item.qty + delta) } : item
    )
    .filter((item) => item.qty > 0);
}

function removeCartItem(cart: CartItem[], id: number): CartItem[] {
  return cart.filter((item) => item.id !== id);
}

function calculateCartSummary(cart: CartItem[]) {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = subtotal === 0 ? 0 : subtotal >= STORE.freeShippingThreshold ? 0 : STORE.shippingFee;
  const total = subtotal + shipping;
  const itemCount = cart.reduce((sum, item) => sum + item.qty, 0);
  return { subtotal, shipping, total, itemCount };
}

function formatCurrency(value: number) {
  return `NT$ ${Number(value).toLocaleString("zh-TW")}`;
}

function getCategories(products: readonly Product[]) {
  return ["全部", ...new Set(products.map((item) => item.category).filter(Boolean))];
}

function validateCheckout(cart: CartItem[], customer: CustomerForm) {
  if (cart.length === 0) return "請先加入商品再送出訂單";
  if (!customer.name.trim()) return "請填寫姓名";
  if (!customer.phone.trim()) return "請填寫電話";
  if (!customer.fulfillment) return "請選擇取貨方式";
  if (!customer.payment) return "請選擇付款方式";
  if (customer.fulfillment === "delivery" && !customer.address.trim()) return "選擇宅配寄送時必須填寫地址";
  return "";
}

function buildOrderPayload(cart: CartItem[], customer: CustomerForm, summary: ReturnType<typeof calculateCartSummary>) {
  const timestamp = new Date();
  const yyyy = timestamp.getFullYear();
  const mm = String(timestamp.getMonth() + 1).padStart(2, "0");
  const dd = String(timestamp.getDate()).padStart(2, "0");
  const hh = String(timestamp.getHours()).padStart(2, "0");
  const min = String(timestamp.getMinutes()).padStart(2, "0");
  const ss = String(timestamp.getSeconds()).padStart(2, "0");

  return {
    storeName: STORE.name,
    orderNo: `ORD-${yyyy}${mm}${dd}-${hh}${min}${ss}`,
    createdAt: timestamp.toLocaleString("zh-TW"),
    customer,
    summary,
    items: cart.map((item) => ({
      code: item.code,
      name: item.name,
      category: item.category,
      price: item.price,
      qty: item.qty,
      amount: item.price * item.qty,
    })),
  };
}

function hasValidScriptUrl(url: string) {
  return typeof url === "string" && url.startsWith("https://script.google.com/");
}

async function submitOrderToGoogleSheet(payload: ReturnType<typeof buildOrderPayload>) {
  if (!hasValidScriptUrl(GOOGLE_SCRIPT_URL)) throw new Error("尚未設定 Google Apps Script 網址");
  const response = await fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(payload),
  });
  const text = await response.text();
  let result: any = {};
  try { result = text ? JSON.parse(text) : {}; } catch { result = { success: response.ok, message: text || "已送出" }; }
  if (!response.ok || result.success === false) throw new Error(result.message || "訂單送出失敗，請檢查 Google Apps Script 設定");
  return result;
}

function ProductCard({ product, onAddToCart }: { product: Product; onAddToCart: (p: Product) => void }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="aspect-square overflow-hidden bg-stone-100">
        <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
      </div>
      <div className="space-y-3 p-5">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-600">{product.category}</span>
          <span className="text-lg font-bold text-stone-900">{formatCurrency(product.price)}</span>
        </div>
        <div>
          <p className="text-xs text-stone-500">商品編號：{product.code}</p>
          <h3 className="mt-1 text-lg font-semibold text-stone-900">{product.name}</h3>
          <p className="mt-1 text-sm leading-6 text-stone-500">{product.description}</p>
        </div>
        <button onClick={() => onAddToCart(product)} className="w-full rounded-2xl bg-stone-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-stone-700">加入購物車</button>
      </div>
    </div>
  );
}

function CartItemCard({ item, onDecrease, onIncrease, onRemove }: { item: CartItem; onDecrease: () => void; onIncrease: () => void; onRemove: () => void }) {
  return (
    <div className="rounded-2xl border border-stone-200 p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs text-stone-500">商品編號：{item.code}</p>
          <h3 className="mt-1 font-semibold text-stone-900">{item.name}</h3>
          <p className="mt-1 text-sm text-stone-500">{formatCurrency(item.price)} / 件</p>
        </div>
        <div className="text-right font-semibold text-stone-900">{formatCurrency(item.price * item.qty)}</div>
      </div>
      <div className="mt-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 rounded-full border border-stone-300 px-3 py-1">
          <button onClick={onDecrease} className="text-lg font-semibold text-stone-700">−</button>
          <span className="min-w-5 text-center text-sm font-medium">{item.qty}</span>
          <button onClick={onIncrease} className="text-lg font-semibold text-stone-700">+</button>
        </div>
        <button onClick={onRemove} className="text-sm text-rose-500 transition hover:text-rose-600">移除</button>
      </div>
    </div>
  );
}

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [customer, setCustomer] = useState<CustomerForm>({ name: "", phone: "", address: "", note: "", fulfillment: "delivery", payment: "bank" });
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("全部");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const categories = useMemo(() => getCategories(PRODUCTS), []);

  useEffect(() => {
    try {
      const savedCart = window.localStorage.getItem(CART_STORAGE_KEY);
      const savedCustomer = window.localStorage.getItem(CUSTOMER_STORAGE_KEY);
      if (savedCart) setCart(JSON.parse(savedCart));
      if (savedCustomer) setCustomer(JSON.parse(savedCustomer));
    } catch {}
  }, []);

  useEffect(() => { try { window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart)); } catch {} }, [cart]);
  useEffect(() => { try { window.localStorage.setItem(CUSTOMER_STORAGE_KEY, JSON.stringify(customer)); } catch {} }, [customer]);

  const filteredProducts = useMemo(() => PRODUCTS.filter((product) => {
    const matchCategory = category === "全部" || product.category === category;
    const text = `${product.name} ${product.code} ${product.category} ${product.description}`.toLowerCase();
    return matchCategory && text.includes(keyword.toLowerCase());
  }), [keyword, category]);

  const { subtotal, shipping, total, itemCount } = useMemo(() => calculateCartSummary(cart), [cart]);
  const summary = useMemo(() => ({ subtotal, shipping, total, itemCount }), [subtotal, shipping, total, itemCount]);
  const isShipping = customer.fulfillment === "delivery";
  const hasScriptUrl = hasValidScriptUrl(GOOGLE_SCRIPT_URL);

  const handleSubmitOrder = async () => {
    const error = validateCheckout(cart, customer);
    if (error) { setErrorMessage(error); setSuccessMessage(""); return; }
    const payload = buildOrderPayload(cart, customer, summary);
    setErrorMessage("");
    try {
      setIsSubmitting(true);
      const result = await submitOrderToGoogleSheet(payload);
      setSuccessMessage(`${result.message || "訂單已成功送出"}
訂單編號：${payload.orderNo}`);
      setCart([]);
      setCustomer({ name: "", phone: "", address: "", note: "", fulfillment: "delivery", payment: "bank" });
      window.localStorage.removeItem(CART_STORAGE_KEY);
      window.localStorage.removeItem(CUSTOMER_STORAGE_KEY);
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : "送單失敗");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <header className="border-b border-stone-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 md:flex-row md:items-center md:justify-between md:px-6">
          <div>
            <p className="text-sm tracking-[0.2em] text-stone-500">商用版線上購物車</p>
            <h1 className="text-2xl font-bold">{STORE.name}</h1>
            <p className="mt-1 text-sm text-stone-500">{STORE.subtitle}</p>
          </div>
          <div className="rounded-2xl bg-stone-900 px-4 py-3 text-sm text-white shadow-sm">購物車 {itemCount} 件 ｜ 客服電話：{STORE.servicePhone}</div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 py-6 md:px-6">
        <div className="rounded-3xl bg-gradient-to-r from-stone-900 to-stone-700 p-6 text-white shadow-lg md:p-8">
          <h2 className="mt-2 text-3xl font-bold md:text-5xl">穩定可擴充的商用版下單頁</h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-stone-200 md:text-base">{STORE.announcement}</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 pb-10 md:grid-cols-[1.55fr_0.95fr] md:px-6">
        <div>
          <div className="rounded-3xl border border-dashed border-stone-300 bg-stone-50 p-5 text-sm leading-7 text-stone-600">
            <h3 className="mb-2 text-base font-semibold text-stone-900">已完成項目</h3>
            <ul className="list-disc space-y-1 pl-5">
              <li>已放入 21 筆商品與圖片</li>
              <li>已填入 Google Apps Script 送單網址</li>
              <li>可直接部署到 Vercel</li>
            </ul>
          </div>
          <div className="mt-6 rounded-3xl border border-stone-200 bg-white p-4 shadow-sm">
            <div className="grid gap-3 md:grid-cols-[1fr_auto]">
              <input value={keyword} onChange={(e) => setKeyword(e.target.value)} placeholder="搜尋商品名稱、商品編號、分類" className="w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none transition focus:border-stone-900" />
              <select value={category} onChange={(e) => setCategory(e.target.value)} className="rounded-2xl border border-stone-300 bg-white px-4 py-3 outline-none transition focus:border-stone-900">
                {categories.map((item) => <option key={item} value={item}>{item}</option>)}
              </select>
            </div>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product) => <ProductCard key={product.id} product={product} onAddToCart={(p) => { setCart((prev) => addItemToCart(prev, p)); setErrorMessage(""); } } />)}
          </div>
          <div className="mt-6 rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-stone-900">填寫訂單資料</h3>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <input className="w-full rounded-2xl border border-stone-300 px-4 py-3" placeholder="請輸入姓名" value={customer.name} onChange={(e)=>setCustomer((prev)=>({...prev,name:e.target.value}))} />
              <input className="w-full rounded-2xl border border-stone-300 px-4 py-3" placeholder="請輸入電話" value={customer.phone} onChange={(e)=>setCustomer((prev)=>({...prev,phone:e.target.value}))} />
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <select className="w-full rounded-2xl border border-stone-300 bg-white px-4 py-3" value={customer.fulfillment} onChange={(e)=>setCustomer((prev)=>({...prev,fulfillment:e.target.value}))}>
                {FULFILLMENT_OPTIONS.map((option)=><option key={option.value} value={option.value}>{option.label}</option>)}
              </select>
              <select className="w-full rounded-2xl border border-stone-300 bg-white px-4 py-3" value={customer.payment} onChange={(e)=>setCustomer((prev)=>({...prev,payment:e.target.value}))}>
                {PAYMENT_OPTIONS.map((option)=><option key={option.value} value={option.value}>{option.label}</option>)}
              </select>
            </div>
            <input className="mt-4 w-full rounded-2xl border border-stone-300 px-4 py-3" placeholder={isShipping ? "請輸入完整寄送地址" : "若需要可填寫地址"} value={customer.address} onChange={(e)=>setCustomer((prev)=>({...prev,address:e.target.value}))} />
            <textarea className="mt-4 min-h-[110px] w-full rounded-2xl border border-stone-300 px-4 py-3" placeholder="例如：希望聯絡時間、指定到貨時段、取貨提醒等" value={customer.note} onChange={(e)=>setCustomer((prev)=>({...prev,note:e.target.value}))} />
            {errorMessage ? <div className="mt-4 rounded-2xl bg-rose-50 px-4 py-3 text-sm text-rose-600 whitespace-pre-line">{errorMessage}</div> : null}
            {successMessage ? <div className="mt-4 rounded-2xl bg-emerald-50 px-4 py-3 text-sm text-emerald-700 whitespace-pre-line">{successMessage}</div> : null}
            <button onClick={handleSubmitOrder} disabled={isSubmitting} className="mt-5 w-full rounded-2xl bg-stone-900 px-4 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-stone-700 disabled:cursor-not-allowed disabled:bg-stone-300">{isSubmitting ? "訂單送出中..." : "送出訂單"}</button>
            <p className="mt-3 text-xs text-stone-500">Google 試算表狀態：{hasScriptUrl ? "已設定送單網址" : "未設定送單網址"}</p>
          </div>
        </div>

        <aside className="h-fit rounded-3xl border border-stone-200 bg-white p-6 shadow-sm md:sticky md:top-6">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-xl font-bold">購物車</h2>
            <span className="rounded-full bg-stone-100 px-3 py-1 text-sm text-stone-600">{itemCount} 件商品</span>
          </div>
          {cart.length === 0 ? <div className="rounded-2xl border border-dashed border-stone-300 px-4 py-10 text-center text-sm leading-6 text-stone-500">購物車目前沒有商品。<br />請先從左側加入商品。</div> : <div className="space-y-4">{cart.map((item) => <CartItemCard key={item.id} item={item} onDecrease={() => setCart((prev) => changeCartItemQty(prev, item.id, -1))} onIncrease={() => setCart((prev) => changeCartItemQty(prev, item.id, 1))} onRemove={() => setCart((prev) => removeCartItem(prev, item.id))} />)}</div>}
          <div className="mt-6 rounded-2xl bg-stone-50 p-4 text-sm text-stone-600">
            <p>滿 {formatCurrency(STORE.freeShippingThreshold)} 免運</p>
            <p className="mt-1">未達門檻運費：{formatCurrency(STORE.shippingFee)}</p>
          </div>
          <div className="mt-6 space-y-3 border-t border-stone-200 pt-5 text-sm">
            <div className="flex justify-between text-stone-600"><span>小計</span><span>{formatCurrency(subtotal)}</span></div>
            <div className="flex justify-between text-stone-600"><span>運費</span><span>{formatCurrency(shipping)}</span></div>
            <div className="flex justify-between text-lg font-bold text-stone-900"><span>總計</span><span>{formatCurrency(total)}</span></div>
          </div>
        </aside>
      </section>
    </div>
  );
}
