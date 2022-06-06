using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace BT_25_4
{
public partial class Dangky : Form
{
QL_BH_18_04_22Entities db;
public Dangky()
{
InitializeComponent();
}

        private void button3_Click(object sender, EventArgs e)
        {
            Form1 a = new Form1();
            this.Hide();
            a.Show();
        }

        private void button2_Click(object sender, EventArgs e)
        {
            textBox1.Text= "";
            textBox2.Text = "";
            textBox3.Text = "";
            textBox4.Text = "";
            textBox5.Text = "";
        }

        private void button1_Click(object sender, EventArgs e)
        {
            lấy dữ liệu ở các ô
            string makh, tk, dc, mk, tel;
            makh = textBox1.Text;
            tk = textBox2.Text; ;
            dc = textBox3.Text;
            mk = textBox4.Text;
            tel = textBox5.Text;
            kiểm tra xem có trống hay k
            if(makh =="" || mk == "")
            {
            MessageBox.Show("không để trống dữ liệu", "thông báo", MessageBoxButtons.OK, MessageBoxIcon.Warning);
            }
            kiểm tra xem makh đã tồn tại hay chưa
            if (db.Khachhangs.Where(x=>x.MaKH == makh).FirstOrDefault() == null)
            {
            cho phép nhập
            Khachhang k = new Khachhang();
            k.MaKH = makh;
            k.TenKH = tk;
            k.DiaChi = dc;
            k.Tel = tel;
            db.AddToKhachhangs(k);

            MessageBox.Show("đăng kí thành công ");
            } else
            {
         thông báo đã có khách hàng này rồi
            MessageBox.Show("đã có mã khách này rồi, nhập mã khác!");
            }
        }

        private void Dangky_Load(object sender, EventArgs e)
        {
        db = new QL_BH_18_04_22Entities();
        }
    }

}
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace BT_25_4
{
public partial class Form1 : Form
{
public Form1()
{
InitializeComponent();
}

        private void button3_Click(object sender, EventArgs e)
        {
            Dangky f = new Dangky();
            this.Hide();
            f.Show();
        }
    }

}
