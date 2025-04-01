/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package Controlador;

import DAO.UserDAO;
import com.google.gson.Gson;
import java.io.IOException;
import java.io.PrintWriter;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import java.util.HashMap;

/**
 *
 * @author ofeli
 */
@WebServlet(name = "editar_Usuario", urlPatterns = {"/editar_Usuario"})
public class editar_Usuario extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        //processRequest(request, response);
        HttpSession sesion;
        HashMap resultado = new HashMap();
        String idusuario = request.getParameter("iduser");
           String nombre = request.getParameter("nombre");
              String apellido = request.getParameter("apellido");
                 String email = request.getParameter("email");
                 
                 UserDAO userDao = new UserDAO();
                  if (userDao.editarUsuario(Integer.parseInt(idusuario), nombre, apellido, email)) {
            resultado.put("respuesta", true);
        } else {
            resultado.put("respuesta", false);
        }

        String json = new Gson().toJson(resultado);

        PrintWriter out = response.getWriter();
        out.print(json);
        out.flush();
    }

}
