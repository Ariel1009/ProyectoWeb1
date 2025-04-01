/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package Controlador;

import DAO.PublicacionDAO;
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
@WebServlet(name = "GetBusqueda", urlPatterns = {"/GetBusqueda"})
public class GetBusqueda extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        //processRequest(request, response);

        HashMap resultado = new HashMap();
        PublicacionDAO pDAO = new PublicacionDAO();
        String buscar = request.getParameter("buscar");
    

        resultado.put("publicaciones",pDAO.cantidadTotal_publicacionBusqueda(buscar));

        String json = new Gson().toJson(resultado);
        PrintWriter out = response.getWriter();
        out.print(json);
        out.flush();
    }

}
